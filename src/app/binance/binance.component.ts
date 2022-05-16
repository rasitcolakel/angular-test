import { Component, OnInit } from '@angular/core';
import { BinanceService } from '../binance.service';
import { Currency, ChangeTypeEnum } from './currency';
interface CurrencyTypes {
  name: string;
  code: string;
}
@Component({
  selector: 'app-binance',
  templateUrl: './binance.component.html',
  styleUrls: ['./binance.component.css']
})
export class BinanceComponent implements OnInit {
  basicData: any;

  multiAxisData: any;

  multiAxisOptions: any;

  lineStylesData: any;

  basicOptions: any;


  currencyTypes!: CurrencyTypes[];
  currencies!: Currency[];
  constructor(binanceService: BinanceService) {
    this.currencyTypes = [{
      code: "ethbtc",
      name: "Ethereum / Bitcoin",
    }, {
      name: "Binance Coin / Bitcoin",
      code: "bnbbtc"
    }, {
      name: "Dolar / Türk Lirası",
      code: "usdttry"
    }, {
      name: "Bitcoin / Dolar",
      code: "btcusdt"
    }, {
      name: "Ethereum / Dolar",
      code: "ethusdt"
    }];
    binanceService.currencies.subscribe((data: Currency) => {
      console.log("data from socket", data)
      if (this.currencies === undefined) {
        this.currencies = []
        this.currencies.push()
      } else {
        let findIndex = this.currencies.findIndex(currency => currency.s === data.s);
        if (findIndex !== -1) {
          let newChange = ChangeTypeEnum.DECREASE;
          if (this.currencies[findIndex].c > data.c) {
            newChange = ChangeTypeEnum.INCREASE;
          }

          this.currencies[findIndex] = { ...data, changeType: newChange };

        } else {
          this.currencies.push({ ...data, changeType: ChangeTypeEnum.EQUAL });
        }
      }

    })
  }
  //wss://stream.binance.com:9443/ws/!ticker@arr
  ngOnInit(): void {

  }

  getCurrenyName(currency: Currency) {
    if (this.currencyTypes === undefined)
      return "";

    let currencyType = this.currencyTypes.find(type => type.code === currency.s.toLowerCase()) as CurrencyTypes;

    return currencyType.name
  }

  getColor(currency: Currency) {

    if (currency.changeType === ChangeTypeEnum.INCREASE) {
      return "green";
    }
    if (currency.changeType === ChangeTypeEnum.DECREASE) {
      return "red";
    }
    return "blue";
  }
  getIconColor(currency: Currency) {
    console.log("called", currency.changeType)
    if (currency.changeType === ChangeTypeEnum.INCREASE) {
      return "pi pi-arrow-up-right green";
    }
    if (currency.changeType === ChangeTypeEnum.DECREASE) {
      return "pi pi-arrow-down-right red";
    }
    return "pi pi-minus blue";
  }

}

