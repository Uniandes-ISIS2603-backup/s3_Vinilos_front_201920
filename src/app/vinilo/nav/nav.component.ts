import { Component, OnInit } from '@angular/core';
import { GeneroService } from './../../genero/genero.service';
import { Genero } from 'app/genero/genero';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-nav-vinilo',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponentVinilo implements OnInit {

  
  generos: Genero[];
  form: FormGroup;


  constructor(
    private generoService: GeneroService,
    private formBuilder: FormBuilder,
    ) {
      this.buildForm();
   }

  ngOnInit() {
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
 
}
