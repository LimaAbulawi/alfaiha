import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  basicUrl = "https://alfaihascientific.com/alfaihascientific.com/api/public";
  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', 'Bearer '+localStorage.getItem('token'));

    headers2 = new HttpHeaders()
    .set('Authorization', 'Bearer '+localStorage.getItem('token'));
  http: any;

  constructor() { }

  getList() {
    return this.http.get(this.basicUrl + "/api/v1/blogs", { 'headers': this.headers })
  }
}
