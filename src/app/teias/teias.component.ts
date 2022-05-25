import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
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
  constructor(
    private anaTabloService: AnaTabloService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}
  ngOnInit(): void {
    this.anaTabloService.getAnaTablo().then((data) => (this.anaTablo = data));
    this.anaTabloService.getAltTablo().then((data) => (this.altTablo = data));
    this.setHeightAsString();
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
  onFilterPressed(event: any) {
    console.log('onFilterPressed', event);
  }
}
