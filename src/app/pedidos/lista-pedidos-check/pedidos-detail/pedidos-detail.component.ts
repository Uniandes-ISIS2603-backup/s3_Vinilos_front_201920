import { Component, OnInit } from '@angular/core';
import { Pedido } from "../../pedido";
import {Router, ActivatedRoute, Params} from '@angular/router';
import { PedidoService } from "../../../core/services/pedido.service";
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
    let identificador=  Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
  
   this.pedidoService.getPedido(identificador).subscribe(respuesta => 
    {
      console.log(respuesta);

      this.pedido = respuesta;

    });  
  }
}
