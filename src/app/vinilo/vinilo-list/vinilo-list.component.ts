import { Component, OnInit } from '@angular/core';
import { Vinilo } from '../vinilo';
import { ViniloService } from '../vinilo.service';
import { Genero } from 'app/genero/genero';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FilterService } from 'app/core/services/filter.service';
import { GeneroService } from 'app/genero/genero.service';

@Component({
  selector: 'app-vinilo-list',
  templateUrl: './vinilo-list.component.html',
  styleUrls: ['./vinilo-list.component.css']
})

export class ViniloListComponent implements OnInit {


  /**
   * Constructor for the component
   * @param viniloService 
   */
  constructor(private viniloService: ViniloService,
    private generoService: GeneroService,
    private formBuilder: FormBuilder,
    ) {
      this.buildForm();
     }
    
  /**
   *La lista de vinilos que pertenecen a la tienda
   */
  vinilos: Vinilo[] = [];
  generos: Genero[];
  form: FormGroup;
  vinilosInicial: Vinilo[] = [];

  getVinilos(): void {
        this.viniloService.getVinilos().subscribe(vinilos => {
          this.vinilos = vinilos;
          this.vinilosInicial = [...this.vinilos];
        });
  }

  /**
   * This will initialize the component by retrieving the list of editorials from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.getVinilos();
    this.generoService.getGenero().subscribe(generos => { 
      this.generos = generos; 
     });


  }

  private buildForm() {
    this.form = this.formBuilder.group({
      nombreVinilo: [''],
      anio: [''],
      artista: [''],
      ganeroFil: [null]
    });
  }
 
  applyFilter()
  {
    this.removeFilter();
    this.filterVinilos(this.form);
  }

  filterVinilos(form:FormGroup){

    if(form.value.nombreVinilo!='')
    {
      this.vinilos = this.vinilos.filter( result => result.nombre.toLowerCase=== form.value.nombreVinilo.toLowerCase);
    }
    if(form.value.anio!='')
    {
      this.vinilos = this.vinilos.filter( result => result.anio== form.value.anio);
    }
    if(form.value.artista!='')
    {
      this.vinilos = this.vinilos.filter( result => result.artista.toLowerCase=== form.value.artista.toLowerCase);
    }
    /** 
     * Los vinilos no tienen genero en el back
    if(form.value.ganeroFil!=null )
    {
      this.vinilos = this.vinilos.filter( result => result.genero.nombre.toLowerCase=== form.value.ganeroFil.nombre.toLowerCase);
    }
    */

  }

  removeFilter(){
    this.vinilos = [...this.vinilosInicial];
  }

 
}

