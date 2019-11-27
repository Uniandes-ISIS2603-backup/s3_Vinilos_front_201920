import { Component, OnInit } from '@angular/core';
import { GeneroService } from './../../genero/genero.service';
import { Genero } from 'app/genero/genero';
import { ViniloListComponent } from "./../../vinilo/vinilo-list/vinilo-list.component";



@Component({
  selector: 'app-nav-vinilo',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponentVinilo implements OnInit {

  
  btnfilter: HTMLElement;
  generoSelector: HTMLElement;
  generos: Genero[];

  constructor(private generoService: GeneroService) {
    this.generoSelector = document.getElementById("filtroGenero");
    this.btnfilter= document.getElementById("boton");

    console.log(this.btnfilter);
    //this.btnfilter.onclick = () => this.filtrar();
   }

  
  

  ngOnInit() {
    this.generoService.getGenero().subscribe(generos => { this.generos = generos; console.log(this.generos.length) });
  }

  filtrar() {
    let text = this.generoSelector["value"];
    console.log(text);

  }

}
