import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { CountriesComponent } from './countries/countries.component';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { BinanceComponent } from './binance/binance.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TeiasComponent } from './teias/teias.component';
import { TeiasSidebarComponent } from './teias/teias-sidebar/teias-sidebar.component';
import { TreeModule } from 'primeng/tree';
import { NodeService } from './teias/teias-sidebar/nodeService';
import { FilterMenuComponent } from './teias/filter-menu/filter-menu.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AccordionModule } from 'primeng/accordion';
import { AnaTabloService } from './teias/anaTabloService';
import { PaginatorModule } from 'primeng/paginator';
import { SkeletonModule } from 'primeng/skeleton';
import { SidebarModule } from 'primeng/sidebar';
import { SplitterModule } from 'primeng/splitter';
import { ToolbarModule } from 'primeng/toolbar';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ChartModule } from 'primeng/chart';
import { ChartDemoComponent } from './chart-demo/chart-demo.component';
import { SplitButtonModule } from 'primeng/splitbutton';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CountriesComponent,
    BinanceComponent,
    TeiasComponent,
    TeiasSidebarComponent,
    FilterMenuComponent,
    ChartDemoComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    HttpClientModule,
    TabViewModule,
    TableModule,
    PanelMenuModule,
    TreeModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    AccordionModule,
    PaginatorModule,
    SkeletonModule,
    SidebarModule,
    SplitterModule,
    ToolbarModule,
    ChartModule,
    SplitButtonModule,
  ],
  providers: [NodeService, AnaTabloService, CdkVirtualScrollViewport],
  bootstrap: [AppComponent],
})
export class AppModule {}
