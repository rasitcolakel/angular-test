import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent, MenuItem } from 'primeng/api';
import { Paginator } from 'primeng/paginator';
import { Splitter } from 'primeng/splitter';
import { anaTablo, gridTabloTabler, altTablo } from 'src/assets/arrays';
import { AltTablo } from './altTablo';
import { AnaTablo } from './anaTablo';
import { AnaTabloService } from './anaTabloService';
import autoTable, { RowInput } from 'jspdf-autotable';
import { font } from './font';
import * as FileSaver from 'file-saver';
import { ScrollPanel } from 'primeng/scrollpanel';

interface Message {
  message: string;
  position: string;
}

interface MessageModal {
  visible: boolean;
  user: string;
  messages: Message[];
  message: string;
}

@Component({
  selector: 'app-teias',
  templateUrl: './teias.component.html',
  styleUrls: ['./teias.component.css'],
})
export class TeiasComponent implements OnInit {
  @Input() isVirtualScroll: boolean = false;
  anaTablo: AnaTablo[] = [];
  anaTabloVirtual: AnaTablo[] = [];
  anaTabloLoading: boolean = true;
  anaTabloPage: number = 0;
  anaTabloRows: number = 0;
  anaTabloSave: MenuItem[] = [];
  filterElements: any;
  seciliAnaTablo!: AnaTablo;
  anaTabloColumns: any[] = anaTablo;
  gridTabloTabler: any[] = gridTabloTabler;
  mainTabs: any[] = ['İşletme', 'Envanter Kaydı'];
  container = 500;
  heightAnaTablo = this.container / 2 - 30 + 'px';
  heightAltTablo = this.container / 2 - 30 + 'px';
  y = 100;
  oldY = 0;
  grabber = false;
  altTablo: AltTablo[] = [];
  altTabloLoading: boolean = false;
  seciliAltTablo!: AltTablo;
  altTabloColumns: any[] = altTablo;
  @ViewChild('paginator', { static: true })
  paginator!: Paginator;
  @ViewChild('splitter', { static: true })
  splitter!: Splitter;
  visibleSidebar: boolean = false;
  mobile: boolean = false;
  items: MenuItem[] = [];
  searchModal: boolean = false;
  transformatorModal: boolean = false;
  transformatorModalItem!: AltTablo;
  messageModalItem: MessageModal = {
    visible: true,
    user: '',
    messages: this.randomMessages(),
    message: '',
  };
  @ViewChild('messagescroll', { static: true })
  messageScroll!: ScrollPanel;
  constructor(
    private anaTabloService: AnaTabloService,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Bilgilendirme',
        items: [
          {
            label: 'Eğitimler',
            icon: 'pi pi-book',
          },
          {
            label: 'Bildirimlerim',
            icon: 'pi pi-bell',
          },
          {
            label: 'E-posta',
            icon: 'pi pi-envelope',
          },
          {
            label: 'Onaylayacaklarım',
            icon: 'pi pi-check-circle',
          },
        ],
      },
      {
        label: 'Kullanıcı',
        items: [
          {
            label: 'User 1 (@user1)',
            icon: 'pi pi-user',
          },
          {
            label: 'Çıkış Yap',
            icon: 'pi pi-sign-out',
          },
        ],
      },
    ];
    console.log('isVirtualScroll', this.isVirtualScroll);
    if (window.screen.width < 1000) {
      this.mobile = true;
      this.visibleSidebar = false;
    } else {
      this.mobile = false;
      this.visibleSidebar = true;
    }
    this.setHeightAsString();
    this.anaTabloVirtual = Array.from({ length: 10000 });
    this.filterAnaTablo({ rows: this.isVirtualScroll && 10000 });

    this.anaTabloSave = [
      {
        label: 'PDF',
        icon: 'pi pi-file-pdf',
        command: () => {
          this.exportPdf();
        },
      },
      {
        label: 'Excel',
        icon: 'pi pi-file-excel',
        command: () => {
          this.exportExcel();
        },
      },
    ];
  }

  filterAnaTablo(event?: any) {
    this.altTablo = [];
    this.anaTabloLoading = true;
    this.anaTabloService
      .getAnaTablo({
        ...this.filterElements,
        page: this.anaTabloPage,
        rows: this.isVirtualScroll && 10000,
        ...event,
      })
      .then((data: any) => {
        setTimeout(() => {
          this.anaTabloRows = data.total;
          this.anaTablo = data.data;
          this.anaTabloLoading = false;
          if (this.isVirtualScroll) {
            console.log('data', data);
            this.anaTabloVirtual = Array.from({ length: data.total });
            let loadedCars = this.anaTablo.slice(0, 100);
            Array.prototype.splice.apply(this.anaTabloVirtual, [
              0,
              100,
              ...loadedCars,
            ]);
            //trigger change detection
            this.anaTabloVirtual = [...this.anaTabloVirtual];
          }
        }, 150);
      });
  }
  onTabChange(event: any) {
    this.filterAltTablo(this.seciliAnaTablo);
  }
  filterAltTablo(event?: any) {
    this.altTabloLoading = true;
    setTimeout(
      () =>
        this.anaTabloService.getAltTablo(event).then((data: any) => {
          this.altTablo = data.data;
          this.altTabloLoading = false;
        }),
      Math.random() * 100
    );
  }

  setHeightAsString(sizes?: any) {
    setTimeout(() => {
      let container = this.el.nativeElement.querySelector(
        '.anatablo-container'
      ).offsetHeight;
      if (sizes) {
        console.log(
          (container * sizes[0]) / 100 - 20 + 'px',
          (container * sizes[1]) / 100 - 20 + 'px'
        );
        this.heightAnaTablo = (container * sizes[0]) / 100 - 20 + 'px';
        this.heightAltTablo = (container * sizes[1]) / 100 - 20 + 'px';
      } else {
        this.heightAltTablo = container / 2 - 35 + 'px';
        ('px');
        this.heightAnaTablo = container / 2 - 35 + 'px';
      }
    }, 1);
  }

  accordionMovement(event: any) {
    setTimeout(() => {
      this.setHeightAsString();
    }, 500);
  }

  anaTabloSec(event: any) {
    this.seciliAnaTablo = event.data;
    this.filterAltTablo(this.seciliAnaTablo);
  }
  anaTabloSecimIptal() {
    // this.seciliAnaTablo = undefined;
  }

  altTabloSec(event: any) {
    this.seciliAltTablo = event.data;
  }
  altTabloSecimIptal() {
    // this.seciliAnaTablo = undefined;
  }
  filterData(event: any) {
    this.filterElements = event;
    this.filterAnaTablo();
    this.paginator.changePage(0);
  }
  onAnaTabloPageChange(event: any) {
    this.anaTabloPage = event.page;
    this.filterAnaTablo();
  }
  anaTabloLazyLoad(event: LazyLoadEvent) {
    console.log('event', event);
    setTimeout(() => {
      //load data of required page
      let loadedCars = this.anaTablo.slice(
        event.first,
        (event.first || 0) + (event.rows || 0)
      );
      Array.prototype.splice.apply(this.anaTabloVirtual, [
        event.first || 0,
        event.rows || 0,
        ...loadedCars,
      ]);
      //trigger change detection
      this.anaTabloVirtual = [...this.anaTabloVirtual];
    }, Math.random() * 1000);
  }
  splitterResize(event: any) {
    this.setHeightAsString(event.sizes);
  }
  exportPdf() {
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
        const doc = new jsPDF.default('l', 'mm', 'a4');

        doc.addFileToVFS('Roboto-Regular.ttf', font);
        doc.addFont('Roboto-Regular.ttf', 'Roboto', 'normal');
        doc.setFont('Roboto');
        autoTable(doc, {
          head: [this.anaTabloColumns.slice(0, 5).map((x) => x.name)],
          body: this.anaTablo.map((x) => [
            x.trafo_merkezi_id,
            x.etiket,
            x.lkp_bolge_mudurluk_qw_,
            x.lkp_bolge_mudurluk_qw_,
            x.lkp_sorumlu_ytm_qw_,
          ]) as RowInput[],
          styles: {
            font: 'Roboto',
            fontStyle: 'normal',
            fontSize: 9,
          },
        });
        doc.save('kayit_export_' + new Date().getTime() + '.pdf');
      });
    });
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.anaTablo);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'kayit');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }

  showSearchModal() {
    this.searchModal = true;
  }
  hideSearchModal() {
    this.searchModal = false;
  }
  showTransformatorModal(row: any) {
    this.transformatorModalItem = row;
    console.log('row', row);
    this.transformatorModal = true;
  }
  hideTransformatorModal() {
    this.transformatorModal = false;
  }

  transactionDetail(date: string, type: string): string {
    return (
      ' tarafından ' +
      date +
      ' ' +
      (type == 'insert'
        ? 'tarihinde kayıt yapılmış'
        : 'tarihinde son kez değiştirilmiş')
    );
  }
  showMessageModal(user: string) {
    this.messageModalItem = {
      user: user,
      visible: true,
      messages: this.randomMessages(),
      message: '',
    };
    setTimeout(() => {
      this.messageScroll.scrollTop(15000);
    }, 100);
  }
  hideMessageModal() {
    this.messageModalItem = {
      user: '',
      visible: false,
      messages: this.randomMessages(),
      message: '',
    };
  }
  randomMessages() {
    let messages = [
      {
        message: 'Selam',
        position: 'left',
      },
      {
        message: 'Merhaba',
        position: 'right',
      },
      {
        message: 'Nasılsınız?',
        position: 'left',
      },
      {
        message: 'İyiyim teşekkürler. Siz?',
        position: 'right',
      },
      {
        message: 'Ben de iyiyim teşekkürler.',
        position: 'left',
      },
    ];
    return messages;
  }

  createMessages(event: any) {
    if (event.keyCode != 13) return;
    if (event.target.value === '') return;
    this.messageModalItem.messages.push({
      message: event.target.value,
      position: 'right',
    });
    this.messageModalItem.message = '';
    setTimeout(() => {
      this.messageScroll.scrollTop(15000);
    }, 100);
  }
}
