import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneroListComponent } from './genero-list/genero-list.component';
import {GeneroService} from './genero.service';
import {AppRoutingModule}from '../app-routing/app-routing.module'

@NgModule({
  imports: [
    CommonModule,AppRoutingModule
  ],
  declarations: [GeneroListComponent],
  exports:[GeneroListComponent],
  providers:[GeneroService]
})
export class GeneroModule { }
