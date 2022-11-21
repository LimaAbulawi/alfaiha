import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.basicUrl + "/api/v1/blogs", { 'headers': this.headers })
  }
}
