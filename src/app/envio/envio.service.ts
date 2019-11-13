import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Envio } from "./envio";
import { EnvioDetail } from "./envio-detail";

import { Observable } from "rxjs";

const API_URL = "http://localhost:8080/s3_vinilos-api/api/envio";
const envios = "envio.json";

@Injectable({
  providedIn: 'root'
})
export class EnvioService {

  constructor(private http: HttpClient) {}
  getEnvio():Observable <Envio[]>// retorna algo de tipo heroe observable
  {
    return this.http.get<Envio[]>(API_URL);
  }
getEnvioDetail(envioId):Observable<EnvioDetail>
{
return this.http.get<EnvioDetail>(API_URL+"/"+envioId);
}
}
