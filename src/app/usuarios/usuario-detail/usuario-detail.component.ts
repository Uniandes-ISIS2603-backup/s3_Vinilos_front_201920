import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
import { UsuarioDetail } from '../usuario-detail';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {

  /**
  * The component's constructor
  * @param editorialService The editorial's service
  * @param route The route element which helps to obtain the editorial's id
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute
  ) { }

  /**
  * The editorial whose details we want to show
  */
  usuarioDetail: UsuarioDetail;

  /**
   *La lista de vinilos que pertenecen a la tienda
   */
  usuarios: Usuario[] = [];

  getUsuarios(): void {
        this.usuarioService.getUsuarios().subscribe(usuarios => this.usuarios = usuarios);
        this.onlyThree();
  }

  onlyThree(): void {
    this.usuarios = this.usuarios.slice(0,3);
  }

  /**
  * The editorial's id retrieved from the address
  */
  @Input() usuario_id: number;

  loader: any;
  /**
  * The method which retrieves the books of an editorial
  */
  getUsuarioDetail(): void {

    this.usuarioService.getUsuarioDetail(this.usuario_id)
      .subscribe(o => {
        this.usuarioDetail = o
      });
  }

  onLoad(params) {

    this.usuario_id = parseInt(params['id']);
    console.log(" en detail " + this.usuario_id);
    this.usuarioDetail = new UsuarioDetail();
    this.getUsuarioDetail();
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
    this.getUsuarios();
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}