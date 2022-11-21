import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallUsService {

  basicUrl = "https://alfaihascientific.com/alfaihascientific.com/api/public";

  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', 'Bearer ' + localStorage.getItem('token'));

  headers2 = new HttpHeaders()
    .set('Authorization', 'Bearer ' + localStorage.getItem('token'));

  constructor(private http: HttpClient) { }

  callus(form: any) {

    console.log("form", form);
    return this.http.post<any>(this.basicUrl + "/api/v1/search", form, { 'headers': this.headers2 })
  }

}
