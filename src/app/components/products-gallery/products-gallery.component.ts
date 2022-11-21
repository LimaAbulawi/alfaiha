import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-gallery',
  templateUrl: './products-gallery.component.html',
  styleUrls: ['./products-gallery.component.scss']
})
export class ProductsGalleryComponent implements OnInit {

  products: any = [];
  cats: any = [];
  url: any = [];

  constructor(private _ser: ProductsService) {

  }

  ngOnInit(): void {
    this.url = this._ser.basicUrl;
    this.getCatListFromService();
    this.getProductsListFromService();
  }

  getProductsListFromService() {
    return this._ser.getList().subscribe((res: any) => {
      this.products = res.data;
    })
  }

  getCatListFromService() {
    return this._ser.getCategoriesList().subscribe((res: any) => {
      this.cats = res.Categorys;
    })
  }
}
