import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Vinilo } from 'app/vinilo/vinilo';

@Component({
  selector: 'app-carrito-list',
  templateUrl: './carrito-list.component.html',
  styleUrls: ['./carrito-list.component.css']
})
export class CarritoListComponent implements OnInit {

  constructor(private carrito:CarritoService) { }

  vinilos:Vinilo[];

  getVinilos()
  {
    this.carrito.getVinilos().subscribe(vini3 => this.vinilos = vini3);
  }
  deleteVinilo(index): void {
    this.vinilos.splice(index, 1);
  }

  ngOnInit() {
    this.getVinilos();
  }

}
