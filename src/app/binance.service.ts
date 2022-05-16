import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { Currency } from './binance/currency';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root',
})
export class BinanceService {
  public currencies!: Subject<Currency>;
  constructor(private wsService: WebsocketService) {
    let streams = [
      "ethbtc@miniTicker", "bnbbtc@miniTicker", "usdttry@miniTicker", "btcusdt@miniTicker", "ethusdt@miniTicker"];
    this.currencies = <Subject<Currency>>(
      wsService.connect('wss://stream.binance.com:9443/ws/' + streams.join('/')).pipe(
        map((response: MessageEvent): Currency => {
          let data = JSON.parse(response.data);
          return data;
        })
      )
    );
  }
}
