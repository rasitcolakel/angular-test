import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Paginator } from 'primeng/paginator';
import { Splitter } from 'primeng/splitter';
import { anaTablo, gridTabloTabler, altTablo } from 'src/assets/arrays';
import { AltTablo } from './altTablo';
import { AnaTablo } from './anaTablo';
import { AnaTabloService } from './anaTabloService';
interface ParamInteface {
  virtualScroll: boolean;
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
  filterElements: any;
  seciliAnaTablo!: AnaTablo;
  anaTabloColumns: any[] = anaTablo;
  gridTabloTabler: any[] = gridTabloTabler;
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
  constructor(
    private anaTabloService: AnaTabloService,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
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
      Math.random() * 1000 + 500
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
}
