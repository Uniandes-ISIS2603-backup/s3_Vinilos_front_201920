import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosListComponent } from './favoritos-list/favoritos-list.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';

import { VinilosFavoritosService } from './vinilosFavoritos.service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
declarations: [FavoritosListComponent],
  exports: [FavoritosListComponent],
  providers: [VinilosFavoritosService]
})
export class VinilosFavoritosModule { }