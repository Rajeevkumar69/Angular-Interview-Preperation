import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeriodicElement } from '../interfaces/common.interface';

@Injectable({ providedIn: 'root' })
export class APIService {
     constructor(
          private _http: HttpClient
     ) { }


     public getUserData() {
          const url = `https://jsonplaceholder.typicode.com/users`;
          return this._http.get<PeriodicElement[]>(url);
     }

}