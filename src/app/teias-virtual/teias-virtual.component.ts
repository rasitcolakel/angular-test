import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teias-virtual',
  templateUrl: './teias-virtual.component.html',
  styleUrls: ['./teias-virtual.component.css'],
})
export class TeiasVirtualComponent implements OnInit {
  isVirtual = false;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((v: any) => {
      this.isVirtual = v.type === 'virtual';
    });
  }
}
