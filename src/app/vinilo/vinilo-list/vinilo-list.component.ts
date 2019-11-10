import { Component, OnInit } from '@angular/core';
import { Vinilo } from '../vinilo';
import { ViniloService } from '../vinilo.service';

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
  constructor(private viniloService: ViniloService) { }
    
  /**
   *La lista de vinilos que pertenecen a la tienda
   */
  vinilos: Vinilo[] = [];

  getVinilos(): void {
        this.viniloService.getVinilos().subscribe(vinilos => this.vinilos = vinilos);
  }

  /**
   * This will initialize the component by retrieving the list of editorials from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.getVinilos();
  }
}