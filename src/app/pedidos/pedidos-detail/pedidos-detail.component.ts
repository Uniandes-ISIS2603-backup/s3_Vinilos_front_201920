import { Component, OnInit } from '@angular/core';
import { Pedido } from "./../pedido";
import {Router, ActivatedRoute, Params} from '@angular/router';
import { PedidoService } from "./../../core/services/pedido.service";
@Component({
  selector: 'app-pedidos-detail',
  templateUrl: './pedidos-detail.component.html',
  styleUrls: ['./pedidos-detail.component.css']
})
export class PedidosDetailComponent implements OnInit {

  pedido:Pedido;
  constructor(private pedidoService:PedidoService,  private router: Router,
    private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params:Params) =>
    {
      this.pedidoService.getPedido(params.id)
      .subscribe(respuesta => {
        this.pedido = respuesta;
      })
    })
  
  }
}
