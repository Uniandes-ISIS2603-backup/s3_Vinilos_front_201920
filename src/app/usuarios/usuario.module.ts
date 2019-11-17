import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';

import { UsuarioService } from './usuario.service';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
declarations: [UsuarioListComponent, UsuarioDetailComponent],
  exports: [UsuarioListComponent],
  providers: [UsuarioService]
})
export class UsuarioModule { }