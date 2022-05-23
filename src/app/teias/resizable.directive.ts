import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Resizable]'
})
export class Resizable {
  style: any;

  constructor(private el: ElementRef,
    private renderer: Renderer2) {
  }
  height = 150;
  y = 100;
  oldY = 0;
  grabber = false;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

    console.log("onMouseMove");
    if (!this.grabber) {
      return;
    }
    this.resizer(event.clientY - this.oldY);
    this.oldY = event.clientY;
    let part = this.el.nativeElement.querySelector('.resizable-div');
    this.renderer.setStyle(part, 'height', this.height + 'px');
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    console.log("evt.target.className: " + event?.target)

    this.grabber = false;
  }

  resizer(offsetY: number) {
    this.height += offsetY;
  }


  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.grabber = true;
    this.oldY = event.clientY;
  }
}


