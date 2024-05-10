import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private _http = inject(HttpClient);
  private urlBase: string = '../../../assets/experiencia.json'

  getData(): Observable<any[]> {
    return this._http.get<any[]>(`${this.urlBase}`)
  } 

}
