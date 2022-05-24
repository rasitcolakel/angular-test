import { Component, OnInit } from '@angular/core';
import { ilArray, isletenFirmaArray, isletmeArray, maksimumSaltArray, mudurlukArray, mulkiyetArray, transformatorMerkeziArray, transformatorMerkeziTipiArray, yukTevziArray } from "../../../assets/arrays"
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
  constructor() { }

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
  mudurlukSecildi() { }
}
