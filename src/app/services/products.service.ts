import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment.prod';
import * as shared from '../components/shared/shared';


const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }),
  withCredentials: true
};
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  currentLang: any;
  basicUrl = environment.basicUrl;

  headers = shared.headers ;
  headers2 = shared.headers2 ;

  constructor(private translate: TranslateService, private http: HttpClient) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      // console.log("event.lang ", event.lang);
      // service here :  send to service event.lang in hedear
    });

  }


  getList() {
    // console.log(localStorage.getItem(LOCALSTORAGE_TOKEN_KEY));
    return this.http.get(this.basicUrl + "/api/v1/products", { 'headers': this.headers })
  }

  getCategoriesList() {
    // console.log(localStorage.getItem(LOCALSTORAGE_TOKEN_KEY));
    return this.http.get(this.basicUrl + "/api/v1/categories", { 'headers': this.headers })
  }


  getProduct(Id: number) {
    return this.http.get(this.basicUrl + "/api/v1/products/" + Id, { 'headers': this.headers })
  }

  getReltedProduct(Id: number) {
    return this.http.get(this.basicUrl + "/api/v1/products/related/" + Id, { 'headers': this.headers })
  }


  addToCart(Id: number) {
    return this.http.get(this.basicUrl + "/api/v1/addToCart/" + localStorage.getItem('anonymous-key') + '/' + Id, { 'headers': this.headers })
  }

  cartCount() {
    return this.http.get<{}>(this.basicUrl + "/api/v1/cartCount/" + localStorage.getItem('anonymous-key'), { 'headers': this.headers })
  }

  getCart() {
    return this.http.get<{}>(this.basicUrl + "/api/v1/getCart/" + localStorage.getItem('anonymous-key'), { 'headers': this.headers })
  }

  confirmOrder(form: any) {
    return this.http.post<any>(this.basicUrl + "/api/v1/checkout-create", form, { 'headers': this.headers2 })

  }
  search(form: any) {
    console.log("local",  localStorage.getItem('locale'))
    console.log("form",  form)

    return this.http.post<any>(this.basicUrl + "/api/v1/search", form, { 'headers': this.headers2 })
  }

  lang() {
    this.currentLang = this.translate.currentLang;
    console.log("currentLang", this.currentLang);
  }

  delete(Id: number) {
    return this.http.get<{}>(this.basicUrl + "/api/v1/deleteFromCart/" + localStorage.getItem('anonymous-key') + "/" + Id, { 'headers': this.headers })
  }

  updateCart(Id: number, quantity: number) {
    return this.http.get<{}>(this.basicUrl + "/api/v1/updateCart/" + localStorage.getItem('anonymous-key') + "/" + Id + "/" + quantity, { 'headers': this.headers })
  }
}
