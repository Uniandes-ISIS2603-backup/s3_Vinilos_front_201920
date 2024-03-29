import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Artista } from "./artista";
import { ArtistaDetail } from "./artista-detail";

import { Observable } from "rxjs";

const API_URL = "http://localhost:8080/s3_vinilos-api/api/artistas";
const API = "../../assets/";
const artistas = "artista";

@Injectable()
export class ArtistaService {
  constructor(private http: HttpClient) {}
  getArtistas():Observable <Artista[]>// retorna algo de tipo heroe observable
  {
    //return this.http.get<Artista[]>(API_URL+artistas);
    return this.http.get<Artista[]>(API_URL)
  }
getArtistaDetail(artistaId):Observable<ArtistaDetail>
{
//return this.http.get<ArtistaDetail>(API_URL+"artista"+artistaId+".json")
return this.http.get<ArtistaDetail>(`${API_URL}/${artistaId}`)
}
}
