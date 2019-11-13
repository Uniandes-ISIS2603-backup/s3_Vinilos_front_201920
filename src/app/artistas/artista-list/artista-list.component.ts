import { Component, OnInit } from "@angular/core";
import { Artista } from "../artista";
import { ArtistaService } from "../artista.service"; // importo la clase y el servicio de la clase

const artistaInfoTbody: HTMLElement = document.getElementById("promedio");
@Component({
  selector: "app-artista-list",
  templateUrl: "./artista-list.component.html",
  styleUrls: ["./artista-list.component.css"]
})
export class ArtistaListComponent implements OnInit {
  //El componente usa el servicio
  constructor(private artistaService: ArtistaService) {
    this.artistas=[];
  }
  artistas: Artista[];
  getArtistas(): void {
    this.artistaService.getArtistas().subscribe(artistas => (this.artistas = artistas));
  }
  ngOnInit() {
    // que hace cuando se llama el componente
    this.getArtistas();
  }
   
}