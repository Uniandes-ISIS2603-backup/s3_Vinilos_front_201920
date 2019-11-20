import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { ListaPedidosCheckComponent } from './lista-pedidos-check/lista-pedidos-check.component';
import { ListaPedidosRejectedComponent } from './lista-pedidos-rejected/lista-pedidos-rejected.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from '../shared/header/header.component';
import { VistaComponent } from './vista/vista.component';
import { PedidosDetailComponent } from './lista-pedidos-check/pedidos-detail/pedidos-detail.component';
import { PedidosDetailRejectedComponent } from './lista-pedidos-rejected/pedidos-detail-rejected/pedidos-detail-rejected.component';



@NgModule({
  declarations: [ListaPedidosCheckComponent, ListaPedidosRejectedComponent, NavComponent,HeaderComponent, VistaComponent, PedidosDetailComponent, PedidosDetailRejectedComponent],
  imports: [
    CommonModule,
    PedidosRoutingModule
  ],
  exports:  [ListaPedidosCheckComponent, ListaPedidosRejectedComponent,NavComponent,VistaComponent]
})
export class PedidosModule { }
