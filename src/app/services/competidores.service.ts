import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Constansts
import { API_ENDPOINT } from './../constansts';

// URL: http://localhost:63357/CompetidorsAPI/
const URL = API_ENDPOINT + 'CompetidorsAPI/';

@Injectable({
  providedIn: 'root'
})
export class CompetidoresService {
  
  constructor(private httpClient: HttpClient) { }
  
  getCompetidores(): Observable<any> {
    return this.httpClient.get(URL);
  }

  // GET: http://localhost:63357/CompetidoresAPI/5
  getCompetidor(id: any): Observable<any> {
    return this.httpClient.get(`${URL}${id}`);
  }
  
  // POST: http://localhost:63357/CompetidoresAPI/
  postCompetidor(competidor: any) {
    let competidorJson = JSON.stringify(competidor);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post(URL, competidorJson, { headers: headers });
  }

  // PUT: http://localhost:63357/CompetidoresAPI/5
  putCompetidor(id: any, competidor: any) {
    let competidorJson = JSON.stringify(competidor);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.put(URL+id, competidorJson, { headers: headers });
  }
  
  // DELETE: http://localhost:63357/CompetidoresAPI/5
  deleteCompetidor(id: string): Observable<any> {
    return this.httpClient.delete(URL + id);
  }
}
