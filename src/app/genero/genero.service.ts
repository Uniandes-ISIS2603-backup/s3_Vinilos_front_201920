import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Genero } from "./genero";


import { Observable } from "rxjs";

const API_URL = "http://localhost:8080/s3_vinilos-api/api/genero";

@Injectable()
export class GeneroService {

  constructor(private http: HttpClient) {}
  getGenero():Observable <Genero[]>// retorna algo de tipo heroe observable
  {
    return this.http.get<Genero[]>(API_URL);
  }
 
}
