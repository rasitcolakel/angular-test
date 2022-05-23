import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private http: HttpClient, private primengConfig: PrimeNGConfig) {
    // this.http.get("https://jsonplaceholder.typicode.com/posts/")
    //   .subscribe(user => {
    //     console.log(user);
    //   });
  }
  ngOnInit(): void {
    this.primengConfig.ripple = true;

  }
  title = 'angular-demo';
}
