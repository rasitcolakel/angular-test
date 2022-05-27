import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ilArray,
  isletenFirmaArray,
  isletmeArray,
  maksimumSaltArray,
  mudurlukArray,
  mulkiyetArray,
  transformatorMerkeziArray,
  transformatorMerkeziTipiArray,
  yukTevziArray,
} from '../../../assets/arrays';
import { AnaTabloService } from '../anaTabloService';
interface Model {
  id: number;
  name: string;
}
@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.css'],
})
export class FilterMenuComponent implements OnInit {
  @Output() onFilterPressed: EventEmitter<any> = new EventEmitter();
  mudurlukler!: Model[];
  seciliMudurluk: Model[] | undefined;
  isletmeler!: Model[];
  seciliIsletme: Model | undefined;
  yukTevzileri!: Model[];
  seciliYukTevzi: Model[] | undefined;
  transformatorMerkezi!: Model[];
  seciliTransformatorMerkezi: Model[] | undefined;
  tmScada!: Model[];
  seciliTmScada: Model | undefined;
  transformatorMerkeziTipi!: Model[];
  seciliTransformatorMerkeziTipi: Model[] | undefined;
  mulkiyet!: Model[];
  seciliMulkiyet: Model[] | undefined;
  tmIsletme!: Model[];
  seciliTmIsletme: Model[] | undefined;
  rtu!: Model[];
  seciliRtu: Model | undefined;
  isletmeSekli!: Model[];
  seciliIsletmeSekli: Model[] | undefined;
  isletenFirma!: Model[];
  seciliIsletenFirma: Model[] | undefined;
  il!: Model[];
  seciliIl: Model[] | undefined;
  maksimumSalt!: Model[];
  seciliMaksimumSalt: Model[] | undefined;
  constructor(anaTabloService: AnaTabloService) {}

  ngOnInit(): void {
    this.mudurlukler = this.addIDToArray(mudurlukArray);
    this.isletmeler = this.addIDToArray(isletmeArray);
    this.yukTevzileri = this.addIDToArray(yukTevziArray);
    this.transformatorMerkezi = this.addIDToArray(transformatorMerkeziArray);
    this.tmScada = this.addIDToArray(['HAYIR', 'EVET']);
    this.transformatorMerkeziTipi = this.addIDToArray(
      transformatorMerkeziTipiArray
    );
    this.mulkiyet = this.addIDToArray(mulkiyetArray);
    this.tmIsletme = this.addIDToArray(mulkiyetArray);
    this.rtu = this.addIDToArray(['HAYIR', 'EVET']);
    this.isletmeSekli = this.addIDToArray(['TEİAŞ', 'HİZMET ALIMI']);
    this.isletenFirma = this.addIDToArray(isletenFirmaArray);
    this.il = this.addIDToArray(ilArray);
    this.maksimumSalt = this.addIDToArray(maksimumSaltArray);
  }

  addIDToArray(array: any[]) {
    return array.map((item, key) => {
      return {
        id: key,
        name: item,
      };
    });
  }
  mudurlukSecildi() {}

  filtrele(): void {
    this.onFilterPressed.emit({
      seciliMudurluk: this.seciliMudurluk,
      seciliIsletme: this.seciliIsletme,
      seciliYukTevzi: this.seciliYukTevzi,
      seciliTransformatorMerkezi: this.seciliTransformatorMerkezi,
      seciliTmScada: this.seciliTmScada,
      seciliTransformatorMerkeziTipi: this.seciliTransformatorMerkeziTipi,
      seciliMulkiyet: this.seciliMulkiyet,
      seciliTmIsletme: this.seciliTmIsletme,
      seciliRtu: this.seciliRtu,
      seciliIsletmeSekli: this.seciliIsletmeSekli,
      seciliIsletenFirma: this.seciliIsletenFirma,
      seciliIl: this.seciliIl,
      seciliMaksimumSalt: this.seciliMaksimumSalt,
    });
  }
}
