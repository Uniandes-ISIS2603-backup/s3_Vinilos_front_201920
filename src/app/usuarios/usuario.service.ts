import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { UsuarioDetail } from './usuario-detail';
import { Observable } from 'rxjs';

const API_URL = '../../assets/';
const usuarios = 'usuarios.json';

@Injectable()
export class UsuarioService {

  /**
    * Constructor del Usuario
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }
  getUsuarios() : Observable<Usuario[]> {
        return this.http.get<Usuario[]>(API_URL + usuarios);
  }

   /**
    * Returns the Observable object containing the Usuario retrieved from the API
    * @returns The Usuario
    */
    getUsuarioDetail(usuarioId): Observable<UsuarioDetail> {
        return this.http.get<UsuarioDetail>(API_URL + "usuario-" + usuarioId + ".json");
    }

}