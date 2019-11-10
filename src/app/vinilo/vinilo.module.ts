import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViniloListComponent } from './vinilo-list/vinilo-list.component';
import { ViniloService } from './vinilo.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ViniloListComponent],
  exports: [ViniloListComponent],
  providers: [ViniloService]
})
export class ViniloModule { }