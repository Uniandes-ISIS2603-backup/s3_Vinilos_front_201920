import { Component, OnInit } from '@angular/core';
import { VinilosFavoritos } from '../vinilosFavoritos';
import { VinilosFavoritosService } from '../vinilosFavoritos.service';

@Component({
  selector: 'app-favoritos-list',
  templateUrl: './favoritos-list.component.html',
  styleUrls: ['./favoritos-list.component.css']
})

export class FavoritosListComponent implements OnInit {

  /**
   * Constructor for the component
   * @param vinilosFavoritosService 
   */
  constructor(private vinilosFavoritosService: VinilosFavoritosService) { }
    
  /**
   *La lista de vinilos que pertenecen a la tienda
   */
  vinilosFavoritos: VinilosFavoritos[] = [];

  getVinilosFavoritos(): void {
        this.vinilosFavoritosService.getVinilosFavoritos().subscribe(vinilosFavoritos => this.vinilosFavoritos = vinilosFavoritos);
  }

  /**
   * This will initialize the component by retrieving the list of editorials from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.getVinilosFavoritos();
  }
}