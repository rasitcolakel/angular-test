import { Component, OnInit } from '@angular/core';
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
    let mudurlukArray = [
      'GENEL MÜDÜRLÜK',
      '1. BÖLGE MÜDÜRLÜĞÜ',
      '2. BÖLGE MÜDÜRLÜĞÜ',
      '3. BÖLGE MÜDÜRLÜĞÜ',
      '4. BÖLGE MÜDÜRLÜĞÜ',
      '5. BÖLGE MÜDÜRLÜĞÜ',
      '6. BÖLGE MÜDÜRLÜĞÜ',
      '7. BÖLGE MÜDÜRLÜĞÜ',
      '8. BÖLGE MÜDÜRLÜĞÜ',
      '9. BÖLGE MÜDÜRLÜĞÜ',
      '10. BÖLGE MÜDÜRLÜĞÜ',
      '11. BÖLGE MÜDÜRLÜĞÜ',
      '12. BÖLGE MÜDÜRLÜĞÜ',
      '13. BÖLGE MÜDÜRLÜĞÜ',
      '14. BÖLGE MÜDÜRLÜĞÜ',
      '15. BÖLGE MÜDÜRLÜĞÜ',
      '16. BÖLGE MÜDÜRLÜĞÜ',
      '17. BÖLGE MÜDÜRLÜĞÜ',
      '18. BÖLGE MÜDÜRLÜĞÜ',
      '19. BÖLGE MÜDÜRLÜĞÜ',
      '20. BÖLGE MÜDÜRLÜĞÜ',
      '21. BÖLGE MÜDÜRLÜĞÜ',
      '22. BÖLGE MÜDÜRLÜĞÜ',
    ];
    let isletmeArray = [
      'İŞLETME VE BAKIM MÜDÜRLÜ',
      'İKİTELLİ İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ',
      'İŞLETME VE BAKIM MÜDÜRLÜ',
      'BALIKESİR İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ',
      'ÇANAKKALE İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ',
      'İŞLETME VE BAKIM MÜDÜRLÜ',
      'ALİAĞA İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ (İZMİR)',
      'MANİSA İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ',
      'İŞLETME VE BAKIM MÜDÜRLÜ',
      'TEPEÖREN İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ',
      'İŞLETME VE BAKIM MÜDÜRLÜ',
      'ZONGULDAK İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ',
      'İŞLETME VE BAKIM MÜDÜRLÜ',
      'ESKİŞEHİR İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ',
      'İŞLETME VE BAKIM MÜDÜRLÜ',
      'AFYON İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ',
      'İŞLETME VE BAKIM MÜDÜRLÜ',
      'İŞLETME VE BAKIM MÜDÜRLÜ',
      'KARAMAN İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ',
      'SEYDİŞEHİR İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ',
      'İŞLETME VE BAKIM MÜDÜRLÜ',
      'ORDU İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ',
      'TOKAT İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ',
      'İŞLETME VE BAKIM MÜDÜRLÜ',
      'KIRŞEHİR İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ',
      'SİVAS İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ',
      'NİĞDE İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ',
      'İŞLETME VE BAKIM MÜDÜRLÜ',
      'KAHRAMANMARAŞ İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ',
      'ŞANLIURFA İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ',
      'İŞLETME VE BAKIM MÜDÜRLÜ',
      'MALATYA İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ',
      'ADIYAMAN İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ',
      'İŞLETME VE BAKIM MÜDÜRLÜ',
      'HOPA İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ',
      'İŞLETME VE BAKIM MÜDÜRLÜ',
      'ERZİNCAN İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ',
      'KARS İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ',
      'İŞLETME VE BAKIM MÜDÜRLÜ',
      'DİYARBAKIR İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ',
      'MARDİN İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ',
      'SİİRT İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ',
      'İŞLETME VE BAKIM MÜDÜRLÜ',
      'AĞRI İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ',
      'IĞDIR İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ',
      'TATVAN İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ (BİTLİS)',
      'İŞLETME VE BAKIM MÜDÜRLÜ',
      'İSKENDERUN İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ',
      'MERSİN İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ',
      'İŞLETME VE BAKIM MÜDÜRLÜ',
      'ALANYA İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ',
      'FİNİKE İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ',
      'İŞLETME VE BAKIM MÜDÜRLÜ',
      'TEKİRDAĞ İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ',
      'İŞLETME VE BAKIM MÜDÜRLÜ',
      'AYDIN İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ',
      'MUĞLA İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ',
      'BİNGÖL İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ',
      'CİZRE İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ',
    ];
    let yukTevziArray = [
      'DOĞU AKDENİZ YÜK TEVZİ İŞLETME MÜDÜRLÜĞÜ (ADANA )',
      'ORTA ANADOLU YÜK TEVZİ İŞLETME MÜDÜRLÜĞÜ (GÖLBAŞI)',
      'BATI AKDENİZ YÜK TEVZİ İŞLETME MÜDÜRLÜĞÜ (KEPEZ/ANTALYA)',
      'TRAKYA YÜK TEVZİ İŞLETME MÜDÜRLÜĞÜ (İSTANBUL)',
      'GÜNEYDOĞU ANADOLU YÜK TEVZİ İŞLETME MÜDÜRLÜĞÜ (ELAZIĞ)',
      'DOĞU ANADOLU YÜK TEVZİ İŞLETME MÜDÜRLÜĞÜ (ERZURUM)',
      'BATI ANADOLU YÜK TEVZİ İŞLETME MÜDÜRLÜĞÜ (İZMİR)',
      'KUZEYBATI ANADOLU YÜK TEVZİ İŞLETME MÜDÜRLÜĞÜ (ADAPAZARI)',
      'ORTA KARADENİZ YÜK TEVZİ İŞLETME MÜDÜRLÜĞÜ (SAMSUN)',
    ];
    let transformatorMerkeziArray = [
      'İŞLETMEDE',
      'TESİS AŞAMASINDA',
      'PLANLAMADA',
    ];
    let transformatorMerkeziTipiArray = [
      'KLASİK',
      'GİS (GAZ İZOLELİ SİSTEM)',
      'SKM (SERİ KAPASİTÖR MERKEZİ)',
      'İNTERFACE',
    ];
    let mulkiyetArray = ['TEİAŞ', 'ORTAK', 'DİĞER', 'YURTDIŞI'];
    let isletenFirmaArray = [
      'AKMAN ENERJİ HAYRİ SUVAY İŞ ORTAKLIĞI',
      'AKSÖZ ELEKTRİK',
      'AKTİF ENERJİ',
      'BATUM ELEKTRİK',
      'BMM A.Ş.',
      'BOZ-AK ENERJİ',
      'CEM BARAN',
      'ÇETİNKAYA ELEKTRİK',
      'DEMİSTAŞ',
      'ELBİM ELEKTRİK',
      'ELTEM TEK',
      'EMRE ENERJİ',
      'İŞSAN İNŞAAT',
      'MET ENERJİ',
      'MOSTAR GRUP',
      'ÖZAŞ ENERJİ',
      'REM MÜHENDİSLİK',
      'RM ELEKTRİK',
      'ŞAHİN YILMAZ ENERJİ',
      'TİMERK ENERJİ',
      'YAMANLAR',
      'EPD MÜHENDİSLİK',
      'MAT Enerji',
      'BATUM MERMER',
      'SUVAY ENERJİ',
      'SAF TEMİZLİK',
      'ANIK MÜHENDİSLİK',
      'ENERON MÜHENDİSLİK',
      'YAMAN ENERJİ',
      'GÜLKAR',
      'EMBİ',
      'RÖNESANS RESTERASYON A.Ş.',
      'SY ENERJİ YATIRIM A.Ş.',
      'BMM',
      'YAMANLAR-GÜLKAR İŞ ORTAKLIĞI',
      'ANIK - KAYA İŞ ORTAKLIĞI',
      'İŞSAN-RÖNESANS İŞ ORTAKLIĞI',
      'SAF ENERJİ',
      'AKMAN ENERJİ',
      'KAYA GRUP',
    ];
    let ilArray = [
      'Adana',
      'Adıyaman',
      'Afyon',
      'Ağrı',
      'Amasya',
      'Ankara',
      'Antalya',
      'Artvin',
      'Aydın',
      'Balıkesir',
      'Bilecik',
      'Bingöl',
      'Bitlis',
      'Bolu',
      'Burdur',
      'Bursa',
      'Çanakkale',
      'Çankırı',
      'Çorum',
      'Denizli',
      'Diyarbakır',
      'Edirne',
      'Elazığ',
      'Erzincan',
      'Erzurum',
      'Eskişehir',
      'Gaziantep',
      'Giresun',
      'Gümüşhane',
      'Hakkari',
      'Hatay',
      'Isparta',
      'İçel',
      'İstanbul',
      'İzmir',
      'Kars',
      'Kastamonu',
      'Kayseri',
      'Kırklareli',
      'Kırşehir',
      'Kocaeli',
      'Konya',
      'Kütahya',
      'Malatya',
      'Manisa',
      'Kahramanmaraş',
      'Mardin',
      'Muğla',
      'Muş',
      'Nevşehir',
      'Niğde',
      'Ordu',
      'Rize',
      'Sakarya',
      'Samsun',
      'Siirt',
      'Sinop',
      'Sivas',
      'Tekirdağ',
      'Tokat',
      'Trabzon',
      'Tunceli',
      'Şanlıurfa',
      'Uşak',
      'Van',
      'Yozgat',
      'Zonguldak',
      'Aksaray',
      'Bayburt',
      'Karaman',
      'Kırıkkale',
      'Batman',
      'Şırnak',
      'Bartın',
      'Ardahan',
      'Iğdır',
      'Yalova',
      'Karabük',
      'Kilis',
      'Osmaniye',
      'Düzce',
    ];
    let maksimumSaltArray = ["6.3",
      "10.5",
      "15.8",
      "33",
      "66",
      "154",
      "400",
    ]
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
