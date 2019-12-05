import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoListComponent } from './carrito-list/carrito-list.component';
import { AppRoutingModule } from 'app/app-routing/app-routing.module';
import { CarritoService } from './carrito.service';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule
  ],
  declarations: [CarritoListComponent],
  exports:[CarritoListComponent],
  providers:[CarritoService]
})
export class CarritoModule { }
