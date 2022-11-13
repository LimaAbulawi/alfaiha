import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import * as shared from '../components/shared/shared';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SlidersService {
  basicUrl = environment.basicUrl;
  headers = shared.headers;
  headers2 = shared.headers2;

  constructor(private http: HttpClient) { }
  // get list
  getList() {
    return this.http.get(this.basicUrl + "/api/v1/sliders", { 'headers': this.headers })
  }
  // view
  getView(Id: number) {
    return this.http.get(this.basicUrl + "/api/v1/sliders/" + Id, { 'headers': this.headers })
  }
  // add new
  create(newFormData: any) {
    return this.http.post<any>(this.basicUrl + "/api/v1/sliders-create", newFormData, { 'headers': this.headers2 })
  }
  // get delete 
  delete(Id: number) {
    return this.http.get(this.basicUrl + "/api/v1/sliders/delete/" + Id, { 'headers': this.headers })
  }
}
