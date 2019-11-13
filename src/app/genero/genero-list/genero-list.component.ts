import { Component, OnInit } from '@angular/core';
import {Genero} from "../genero";
import { GeneroService } from "../genero.service";


@Component({
  selector: 'app-genero-list',
  templateUrl: './genero-list.component.html',
  styleUrls: ['./genero-list.component.css']
})
export class GeneroListComponent implements OnInit {


  constructor(private generoService: GeneroService) {
    this.genero = [];
  }
  genero: Genero[];
  getGenero(): void {
    this.generoService.getGenero().subscribe(genero=> (this.genero = genero));
  }
  ngOnInit() {
    // que hace cuando se llama el componente
    this.getGenero();
  }


}
