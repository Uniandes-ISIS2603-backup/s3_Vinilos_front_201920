import { Injectable } from '@angular/core';
import { Vinilo } from 'app/vinilo/vinilo';
import { ViniloService } from 'app/vinilo/vinilo.service';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  vinilos: Vinilo[] = [];
  vinilosInicial: Vinilo[] = [];


  constructor(private viniloService: ViniloService) { }

  getVinilos(): Observable<Vinilo[]> {
    /**
    this.viniloService.getVinilos().subscribe(vinilos => {
      this.vinilos = vinilos;
      this.vinilosInicial = { ...this.vinilos };
    });
    return this.vinilos;
     */
    return this.viniloService.getVinilos();
  }

  filterVinilos(form: FormGroup) {

    if (form.value.nombreVinilo != '') {
      this.vinilos = this.vinilos.filter(result => result.nombre.toLowerCase === form.value.nombreVinilo.toLowerCase);
    }
    if (form.value.anio != '') {
      this.vinilos = this.vinilos.filter(result => result.anio === form.value.anio);
    }
    if (form.value.artista != '') {
      this.vinilos = this.vinilos.filter(result => result.artista.name.toLowerCase === form.value.artista.toLowerCase);
    }
    if (form.value.ganeroFil != null) {
      this.vinilos = this.vinilos.filter(result => result.genero.nombre.toLowerCase === form.value.ganeroFil.nombre.toLowerCase);
    }

  }
  removeFilter() {
    this.vinilos = { ...this.vinilosInicial };
  }

}
