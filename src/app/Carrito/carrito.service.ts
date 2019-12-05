import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Carrito } from "./carrito";
import { Observable } from "rxjs";
import { Vinilo } from 'app/vinilo/vinilo';
const API_URL = "../../assets";
const envios = "/carrito.json";
@Injectable({
  providedIn: 'root'
})
export class CarritoService {  
  constructor(private http: HttpClient) {}

getVinilos():Observable<Vinilo[]>
{
return this.http.get<Vinilo[]>(API_URL+envios);
}
}
