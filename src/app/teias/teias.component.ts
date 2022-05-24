import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { anaTablo, gridTabloTabler } from 'src/assets/arrays';
import { AnaTablo } from './anaTablo';
import { AnaTabloService } from './anaTabloService';

@Component({
  selector: 'app-teias',
  templateUrl: './teias.component.html',
  styleUrls: ['./teias.component.css'],
})
export class TeiasComponent implements OnInit {
  anaTablo: AnaTablo[] = [];
  anaTabloColumns: any[] = anaTablo;
  gridTabloTabler: any[] = gridTabloTabler;
  height = 250;
  heightString = this.height + 'px';
  y = 100;
  oldY = 0;
  grabber = false;
  constructor(
    private anaTabloService: AnaTabloService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}
  ngOnInit(): void {
    this.anaTabloService.getAnaTablo().then((data) => (this.anaTablo = data));
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    if (!this.grabber) return;
    let part = this.el.nativeElement.querySelector('.resizable-div');
    this.height = part.offsetHeight;
    this.resizer(event.clientY - this.oldY);
    this.oldY = event.clientY;
    this.renderer.setStyle(part, 'height', this.height);
    this.setHeightAsString();
    this.grabber = false;
  }

  resizer(offsetY: number) {
    this.height += offsetY;
    this.setHeightAsString();
    let body = this.el.nativeElement.querySelector('.content-area');
    this.renderer.setStyle(body, 'user-select', 'auto');
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
      this.heightString = this.height - 30 + 'px';
    }, 1);
  }

  accordionOpen(event: any) {
    setTimeout(() => {
      let part = this.el.nativeElement.querySelector('.resizable-div');
      this.height = part.offsetHeight;
      this.setHeightAsString();
    }, 300);
  }
}
