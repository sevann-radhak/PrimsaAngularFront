import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// import { FormGroup, FormControl } from '@angular/forms';

// Constansts
import { API_ENDPOINT } from './../constansts';
import { Zona } from '../zonas/Zona';

// URL: http://localhost:63357/ZonasAPI/
const URL = `${API_ENDPOINT}ZonasAPI/`;

@Injectable({
  providedIn: 'root'
})

export class ZonasService {

  zonas: Observable<any>;
  // zona: Observable<any>;
  zona: Zona;

  constructor(private httpClient: HttpClient) {
    this.getZonas();
  }

  // form: FormGroup = new FormGroup({
  //   $key: new FormControl(null),
  //   Codigo: new FormControl(''),
  //   Name: new FormControl('')
  // });

  // Headers
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  // GET: http://localhost:63357/ZonasAPI/
  getZonas(): Observable<any> {
    return (this.zonas = this.httpClient.get(URL));
  }

  // GET: http://localhost:63357/ZonasAPI/5
  getZona(id: any): Observable<any> {
    return (this.zonas = this.httpClient.get(`${URL}${id}`));
  }

  // POST: http://localhost:63357/ZonasAPI/
  postZona(zona: any): Observable<any> {
    let zonaJson = JSON.stringify(zona);

    let token;
    let URL_TOKEN = `${URL}?access_token=${token}`

    return this.httpClient.post(URL_TOKEN, zonaJson, { headers: this.headers });
  }

  // PUT: http://localhost:63357/ZonasAPI/5
  putZona(id: any, zona: any): Observable<any> {
    let zonaJson = JSON.stringify(zona);

    let token;
    let URL_TOKEN = `${URL}${id}?access_token=${token}`

    return this.httpClient.put(URL_TOKEN, zonaJson, { headers: this.headers });
  }

  // DELETE: http://localhost:63357/ZonasAPI/5
  deleteZona(id: any): Observable<any> {
    return this.httpClient.delete(URL + id, { headers: this.headers });
  }
}
