import { Component, OnInit } from '@angular/core';
import { Pedido} from '../pedido';
import { PedidoService } from '../../core/services/pedido.service';
@Component({
  selector: 'app-lista-pedidos-check',
  templateUrl: './lista-pedidos-check.component.html',
  styleUrls: ['./lista-pedidos-check.component.scss']
})
export class ListaPedidosCheckComponent implements OnInit {

  pedidos: Pedido [];
  constructor(
    private pedidoService: PedidoService
   ) { }

  ngOnInit() {
    this.pedidoService.getPedidos()
    .subscribe(respuesta => {
      this.pedidos = respuesta.filter(pedido => pedido.aceptado);
    });
  }

}
