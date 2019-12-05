import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vinilo } from './vinilo';
import { ViniloDetail } from './vinilo-detail';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/s3_vinilos-api/api/vinilos'/*'../../assets/'*/;
const vinilos = 'vinilos.json';

@Injectable()
export class ViniloService {

  /**
    * Constructor del vinilo
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }
  getVinilos() : Observable<Vinilo[]> {
    let a = this.http.get<Vinilo[]>(API_URL /**+ vinilos*/)
    /**console.log(a[1].nombre);*/
    return a;
        
  }

   /**
    * Returns the Observable object containing the vinilo retrieved from the API
    * @returns The vinilo
    */
    getViniloDetail(viniloId): Observable<ViniloDetail> {
        /*return this.http.get<ViniloDetail>(API_URL + "vinilo-" + viniloId + ".json");*/
        return this.http.get<ViniloDetail>(API_URL + "/" + viniloId);
    }

    postVinilo(vinilo: ViniloDetail)
    {
      console.log(`${API_URL}`,vinilo);
      return this.http.post(API_URL,vinilo);
    }

}