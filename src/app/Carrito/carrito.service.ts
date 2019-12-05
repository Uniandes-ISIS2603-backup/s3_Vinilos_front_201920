import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Carrito } from "./carrito";

import { Observable } from "rxjs";

const API_URL = "http://localhost:8080/s3_vinilos-api/api/artistas";
const API = "../../assets/";
const artistas = "artistas.json";

@Injectable()
export class CarritoService {
  constructor(private http: HttpClient) {}
  getCarritos():Observable <Carrito[]>// retorna algo de tipo heroe observable
  {
    //return this.http.get<Artista[]>(API_URL+artistas);
    return this.http.get<Carrito[]>(API_URL)
  }

}
