import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ListaPedidosCheckComponent } from './lista-pedidos-check/lista-pedidos-check.component';
import { ListaPedidosRejectedComponent } from './lista-pedidos-rejected/lista-pedidos-rejected.component';
import { VistaComponent } from './vista/vista.component';
import { PedidosDetailComponent } from './lista-pedidos-check/pedidos-detail/pedidos-detail.component';
import { PedidosDetailRejectedComponent } from './lista-pedidos-rejected/pedidos-detail-rejected/pedidos-detail-rejected.component';


const routes: Routes = [
  {
    path:  '',
    component: NavComponent,
    children: [
      {
        path: 'aceptados/detail/:id',
        component: PedidosDetailComponent
      },
      {
        path: 'rechazados/detail/:id',
        component: PedidosDetailRejectedComponent
      },
      {
        path: 'aceptados',
        component: ListaPedidosCheckComponent
      },
      {
        path: '',
        component: VistaComponent
      },
      {
        path: 'rechazados',
        component: ListaPedidosRejectedComponent
      },
     
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
