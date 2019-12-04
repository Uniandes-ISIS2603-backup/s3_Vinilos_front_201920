import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViniloListComponent } from './vinilo-list/vinilo-list.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';

import { ViniloService } from './vinilo.service';
import { ViniloDetailComponent } from './vinilo-detail/vinilo-detail.component';
import { NavComponentVinilo } from './nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
declarations: [ViniloListComponent, ViniloDetailComponent, NavComponentVinilo],
  exports: [ViniloListComponent, NavComponentVinilo],
  providers: [ViniloService]
})
export class ViniloModule { }
