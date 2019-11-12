import { Component, OnInit } from '@angular/core';
import { Pedido} from '../pedido';
import { PedidoService } from './../../core/services/pedido.service';


@Component({
  selector: 'app-lista-pedidos-rejected',
  templateUrl: './lista-pedidos-rejected.component.html',
  styleUrls: ['./lista-pedidos-rejected.component.scss']
})
export class ListaPedidosRejectedComponent implements OnInit {

  pedidos: Pedido [];


  constructor(
    private pedidoService: PedidoService
  ) { }

  ngOnInit() {
    this.pedidoService.getPedidos()
    .subscribe( pedidos => {
      this.pedidos = pedidos.filter(pedido => !pedido.aceptado);
      });

  }

}
