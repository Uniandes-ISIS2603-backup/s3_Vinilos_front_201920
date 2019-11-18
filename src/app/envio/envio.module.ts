import { NgModule } from '@angular/core';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { CommonModule } from '@angular/common';
import { EnvioListComponent } from './envio-list/envio-list.component';
import { EnvioService } from './envio.service';
import { EnvioDetailComponent } from './envio-detail/envio-detail.component';

@NgModule({
  imports: [
    CommonModule,AppRoutingModule
  ],
  declarations: [EnvioListComponent, EnvioDetailComponent],
  exports:[EnvioListComponent],
  providers: [EnvioService]
})
export class EnvioModule { }
