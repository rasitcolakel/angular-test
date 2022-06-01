import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BinanceComponent } from './binance/binance.component';
import { TeiasVirtualComponent } from './teias-virtual/teias-virtual.component';

const routes: Routes = [
  { path: '', component: TeiasVirtualComponent, data: { type: 'normal' } },
  {
    path: 'virtual',
    component: TeiasVirtualComponent,
    data: { type: 'virtual' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [TeiasVirtualComponent];
