import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Paginator } from 'primeng/paginator';
import { anaTablo, gridTabloTabler, altTablo } from 'src/assets/arrays';
import { AltTablo } from './altTablo';
import { AnaTablo } from './anaTablo';
import { AnaTabloService } from './anaTabloService';

@Component({
  selector: 'app-teias',
  templateUrl: './teias.component.html',
  styleUrls: ['./teias.component.css'],
})
export class TeiasComponent implements OnInit {
  anaTablo: AnaTablo[] = [];
  anaTabloLoading: boolean = true;
  anaTabloPage: number = 0;
  anaTabloRows: number = 0;
  filterElements: any;
  seciliAnaTablo!: AnaTablo;
  anaTabloColumns: any[] = anaTablo;
  gridTabloTabler: any[] = gridTabloTabler;
  height = 150;
  heightAnaTablo = this.height + 'px';
  heightAltTablo = this.height + 'px';
  y = 100;
  oldY = 0;
  grabber = false;
  altTablo: AltTablo[] = [];
  seciliAltTablo!: AltTablo;
  altTabloColumns: any[] = altTablo;
  @ViewChild('paginator', { static: true })
  paginator!: Paginator;

  constructor(
    private anaTabloService: AnaTabloService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}
  ngOnInit(): void {
    this.filterAnaTablo();
    this.anaTabloService
      .getAltTablo({})
      .then((data: any) => (this.altTablo = data.data));
    this.setHeightAsString();
  }

  filterAnaTablo(event?: any) {
    this.anaTabloLoading = true;
    this.anaTabloService
      .getAnaTablo({
        ...this.filterElements,
        page: this.anaTabloPage,
        ...event,
      })
      .then((data: any) => {
        setTimeout(() => {
          this.anaTabloRows = data.total;
          this.anaTablo = data.data;
          this.anaTabloLoading = false;
        }, 150);
      });
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    if (!this.grabber) return;
    let newHeight = event.clientY - this.oldY;
    this.resizer(newHeight);
  }

  resizer(offsetY: number) {
    this.height += offsetY;
    this.setHeightAsString();
    let body = this.el.nativeElement.querySelector('.content-area');
    this.renderer.setStyle(body, 'user-select', 'auto');
    this.grabber = false;
  }

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    const className = (event.target as Element).className;
    if (className !== 'grabber') return;
    this.grabber = true;
    this.oldY = event.clientY;
    let body = this.el.nativeElement.querySelector('.content-area');
    this.renderer.setStyle(body, 'user-select', 'none');
  }

  setHeightAsString() {
    setTimeout(() => {
      let container = this.el.nativeElement.querySelector(
        '.anatablo-container'
      ).offsetHeight;
      let anaTabloUst =
        this.el.nativeElement.querySelector('.anatablo-ust').offsetHeight;
      let altTabloTabler =
        this.el.nativeElement.querySelector('.alt-tablo-tabler').offsetHeight;
      let altTabloTable =
        this.el.nativeElement.querySelector('.alt-tablo-table').offsetHeight;
      this.heightAltTablo =
        container -
        anaTabloUst -
        this.height -
        (altTabloTabler - altTabloTable) -
        5 +
        'px';
      this.heightAnaTablo = this.height + 'px';
    }, 1);
  }

  accordionMovement(event: any) {
    setTimeout(() => {
      this.setHeightAsString();
    }, 500);
  }

  anaTabloSec(event: any) {
    this.seciliAnaTablo = event.data;
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
  anaTabloLazyLoad(event: any) {
    console.log('onLayLoadAnaTablo', event);
    this.anaTabloService
      .getAnaTablo({
        ...this.filterElements,
        page: this.anaTabloPage,
      })
      .then((data: any) => {
        setTimeout(() => {
          this.anaTabloRows = data.total;
          this.anaTablo = data.data;
          this.anaTablo = [...this.anaTablo];
          this.anaTabloLoading = false;
        }, 150);
      });
  }
}
