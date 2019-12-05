import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'app/usuarios/usuario';
const API_URL = 'http://localhost:8080/s3_vinilos-api/api/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private httpClient:HttpClient ) { }

  getUsuarioCorreo(correo : string )
  {
    let respuesta = '';
    for (let index = 0; index < correo.length; index++) {

      let temp = correo.charCodeAt(index);
      respuesta = respuesta + temp;
      
    }
    return this.httpClient.get<Usuario>(`${API_URL}/${respuesta}`);
  }


  postUsuarioCorreo(usuario : Usuario )
  {
    return this.httpClient.post(`${API_URL}`,usuario);
  }

}



