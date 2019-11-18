import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VinilosFavoritos } from './vinilosFavoritos';
import { Observable } from 'rxjs';

const API_URL = '../../assets/';
const vinilos = 'vinilosFavoritos.json';

@Injectable()
export class VinilosFavoritosService {

  /**
    * Constructor del vinilo
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }
  getVinilosFavoritos() : Observable<VinilosFavoritos[]> {
        return this.http.get<VinilosFavoritos[]>(API_URL + vinilos);
  }

}