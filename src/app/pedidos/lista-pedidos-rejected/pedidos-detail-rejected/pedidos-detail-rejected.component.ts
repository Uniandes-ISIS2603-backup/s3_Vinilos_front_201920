import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { PedidoService } from "../../../core/services/pedido.service";
import { Pedido } from "../../pedido";

@Component({
  selector: 'app-pedidos-detail-rejected',
  templateUrl: './pedidos-detail-rejected.component.html',
  styleUrls: ['./pedidos-detail-rejected.component.css']
})
export class PedidosDetailRejectedComponent implements OnInit {

  identificador: number;
  pedido:Pedido;
  constructor(private pedidoService:PedidoService,  private router: Router,
    private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.identificador=  Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
  
    this.pedidoService.getPedido(this.identificador).subscribe(respuesta => 
     {
       this.pedido = respuesta;
 
     });  
  }

  delete(){
    this.pedidoService.deletePedido(this.identificador)
    .subscribe(r =>{
      this.router.navigate(['./pedidos/rechazados']);
      console.log(this.identificador);
    });
  }

}
