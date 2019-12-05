import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form } from '@angular/forms';
import { ViniloService } from '../vinilo.service';
import { ViniloDetail } from '../vinilo-detail';
import { ArtistaService } from 'app/artistas/artista.service';
import { GeneroService } from 'app/genero/genero.service';
import { Genero } from 'app/genero/genero';
import{ArtistaDetail } from '../../artistas/artista-detail';
import { Artista } from 'app/artistas/artista';




@Component({
  selector: 'app-vinilo-create',
  templateUrl: './vinilo-create.component.html',
  styleUrls: ['./vinilo-create.component.css']
})
export class ViniloCreateComponent implements OnInit {

  constructor(
    private viniloService: ViniloService,
    private generoService: GeneroService,
    private artistaService: ArtistaService,
    private formBuilder: FormBuilder
  ) {
    this.buildForm()
  }

  vinilo: ViniloDetail;
  generos: Genero[];
  artistas: Artista[];
  form: FormGroup;

  buildForm() {
    this.form = this.formBuilder.group({
      nombre: [''],
      anio: [''],
      coleccion: [''],
      precio: [''],
      informacion: [''],
      estado: [''],
      imagen: [''],
      artista: [''],
      genero: [''],


    });
  }
    createVinilo(): void {
      let viniloTemp: ViniloDetail = {

        nombre: this.form.value.nombre,
        anio: this.form.value.anio,
        coleccion: this.form.value.coleccion,
        precio: this.form.value.precio,
        informacion: this.form.value.informacion,
        estado: this.form.value.estado,
        imagen: this.form.value.imagen,
        artista: this.form.value.artista,
        genero: this.form.value.genero,
        disponible: true,
        duenio:null,
        id: null        
        

      };
      
      this.viniloService.postVinilo(viniloTemp).subscribe();
      
    }

    ngOnInit() {
      this.vinilo = new ViniloDetail();
      this.generoService.getGenero().subscribe(generos => { 
        this.generos = generos; 
       });
       this.artistaService.getArtistas().subscribe(artistas => {
         this.artistas = artistas;
        });

       
    }

  }
