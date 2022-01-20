import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Print } from '../models/print.model';

@Injectable({
  providedIn: 'root',
})
export class PrintService {
  constructor(private http: HttpClient) {}

  print(print: Print) {
    return this.http.post(`${environment.API_PHOTOCOPIER}/prints`, print);
  }

  getPrints() {
    return this.http.get(`${environment.API_PHOTOCOPIER}/prints`);
  }
}
