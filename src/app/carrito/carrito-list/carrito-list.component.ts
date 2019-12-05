import { Component, OnInit } from "@angular/core";
import { Carrito } from "../carrito";
import { CarritoService } from "../carrito.service"; // importo la clase y el servicio de la clase

const carritoInfoTbody: HTMLElement = document.getElementById("promedio");
@Component({
  selector: "app-carrito-list",
  templateUrl: "./carrito-list.component.html",
  styleUrls: ["./carrito-list.component.css"]
})
export class CarritoListComponent implements OnInit {
  //El componente usa el servicio
  constructor(private carritoService: CarritoService) {
    this.carritos=[];
  }
  carritos: Carrito[];
  getCarritos(): void {
    this.carritoService.getCarritos().subscribe(carritos => (this.carritos = carritos));
  }
  ngOnInit() {
    // que hace cuando se llama el componente
    this.getCarritos();
  }
   
}