import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { CountriesComponent } from './countries/countries.component';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { BinanceComponent } from './binance/binance.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CountriesComponent,
    BinanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    HttpClientModule,
    TabViewModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
