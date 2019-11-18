import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';

import { UsuarioService } from './usuario.service';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
declarations: [ UsuarioDetailComponent],
  exports: [],
  providers: [UsuarioService]
})
export class UsuarioModule { }