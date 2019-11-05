import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vinilo } from './vinilo';
import { Observable } from 'rxjs';

const API_URL = '';
const editorials = '';

@Injectable()
export class ViniloService {

  /**
    * Constructor del vinilo
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }
  getVinilos() : Observable<Vinilo[]> {
        return this.http.get<Vinilo[]>(API_URL + vinilos);
  }

}