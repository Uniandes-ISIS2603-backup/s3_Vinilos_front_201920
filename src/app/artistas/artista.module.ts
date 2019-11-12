import { NgModule } from '@angular/core';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { CommonModule } from '@angular/common';
import { ArtistaService } from './artista.service';
import { ArtistaListComponent } from './artista-list/artista-list.component';
import { ArtistaDetailComponent } from './artista-detail/artista-detail.component';

@NgModule({
  imports: [
    CommonModule,AppRoutingModule
  ],
  declarations: [ArtistaListComponent, ArtistaDetailComponent],
  exports:[ArtistaListComponent],
  providers: [ArtistaService]
})
export class ArtistaModule { }