import { NgModule } from '@angular/core';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { CommonModule } from '@angular/common';
import { CarritoService } from './carrito.service';
import { CarritoListComponent } from "./carrito-list/carrito-list.component";


@NgModule({
  imports: [
    CommonModule,AppRoutingModule
  ],
  declarations: [CarritoListComponent,],
  exports:[CarritoListComponent],
  providers: [CarritoService]
})
export class CarritoModule { }