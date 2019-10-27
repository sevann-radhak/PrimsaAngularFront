import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Constansts
import { API_ENDPOINT } from './../constansts';

// URL: http://localhost:63357/MarcasAPI/
const URL = `${API_ENDPOINT}MarcasAPI/`;

@Injectable({
  providedIn: 'root'
})

export class MarcasService {

  constructor(private httpClient: HttpClient) { }

  // GET: http://localhost:63357/MarcasAPI/
  getMarcas(): Observable<any> {
    return this.httpClient.get(URL);
  }

  // GET: http://localhost:63357/MarcasAPI/5
  getMarca(id: string) {
    return this.httpClient.get(URL + id);
  }

  // POST: http://localhost:63357/MarcasAPI/
  postMarca(marca: any) {
    let marcaJson = JSON.stringify(marca);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post(URL, marcaJson, { headers: headers });
  }

  putMarca() {

  }

  // DELETE: http://localhost:63357/MarcasAPI/5
  deleteMarca(id: string): Observable<any> {
    return this.httpClient.delete(URL + id);
  }
}
