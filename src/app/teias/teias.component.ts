import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Paginator } from 'primeng/paginator';
import { Splitter } from 'primeng/splitter';
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
  container = 500;
  heightAnaTablo = this.container / 2 - 20 + 'px';
  heightAltTablo = this.container / 2 - 20 + 'px';
  y = 100;
  oldY = 0;
  grabber = false;
  altTablo: AltTablo[] = [];
  seciliAltTablo!: AltTablo;
  altTabloColumns: any[] = altTablo;
  @ViewChild('paginator', { static: true })
  paginator!: Paginator;
  @ViewChild('splitter', { static: true })
  splitter!: Splitter;
  visibleSidebar: boolean = false;
  mobile: boolean = false;
  constructor(
    private anaTabloService: AnaTabloService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    if (window.screen.width < 1000) {
      this.mobile = true;
      this.visibleSidebar = false;
    } else {
      this.mobile = false;
      this.visibleSidebar = true;
    }
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
  splitterResize(event: any) {
    this.setHeightAsString(event.sizes);
    console.log('splitterResize', event);
  }

  onGutterTouchMove(event: any) {
    console.log('onGutterTouchMove', event);
  }
}
