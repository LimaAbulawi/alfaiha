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
  id: any = 14;
  constructor(private _ser: ProductsService) {

  }

  ngOnInit(): void {
    this.url = this._ser.basicUrl;
    this.getCatListFromService();
    setTimeout(() => this.getProducts(), 1000);

    // this.getProductsListFromService();
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

  getCategoryProduct(id: any) {
    return this._ser.getCategoryProduct(id).subscribe((res: any) => {
      this.products[id] =  res.data;
      console.log( this.products )
    })
  }

  getProducts() {
    console.log('bawaneh')
    this.cats.forEach((element: any) => {
      this.getCategoryProduct(element.id)
    });
  }

}
