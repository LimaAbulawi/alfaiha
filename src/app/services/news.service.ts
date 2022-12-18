import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import * as shared from '../components/shared/shared';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  basicUrl = environment.basicUrl;
  headers = shared.headers;
  headers2 = shared.headers2;

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.basicUrl + "/api/v1/blogs", { 'headers': this.headers })
  }
  // view
  getView(Id: number) {
    return this.http.get(this.basicUrl + "/api/v1/blogs/" + Id, { 'headers': this.headers })
  }
}
