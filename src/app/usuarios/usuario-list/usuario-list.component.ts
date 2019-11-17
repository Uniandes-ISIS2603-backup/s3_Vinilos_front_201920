import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})

export class UsuarioListComponent implements OnInit {

  /**
   * Constructor for the component
   * @param usuarioService 
   */
  constructor(private usuarioService: UsuarioService) { }
    
  /**
   *La lista de Usuarios que pertenecen a la tienda
   */
  usuarios: Usuario[] = [];

  getUsuarios(): void {
        this.usuarioService.getUsuarios().subscribe(usuarios => this.usuarios = usuarios);
  }

  /**
   * This will initialize the component by retrieving the list of editorials from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.getUsuarios();
  }
}