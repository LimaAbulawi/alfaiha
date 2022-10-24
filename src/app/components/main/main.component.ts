import { Component, HostListener, OnInit } from '@angular/core';
import { Slick } from 'ngx-slickjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  products: any = [];
  url: any = [];

  constructor(private _ser: ProductsService) { }

  ngOnInit(): void {
    this.url = this._ser.basicUrl;
    this.getProductsListFromService();
  }

  getProductsListFromService() {
    return this._ser.getList().subscribe((res: any) => {
      this.products = res.data;
       console.log("this.products", this.products);

    })
  }
  arrayLength = 10;

  ourProducts: Slick.Config = {
    // infinite: true,
    slidesToShow: 6.5,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 2000 ,
    // variableWidth: false,
    }
  news: Slick.Config = {
    infinite: true,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000 ,
    variableWidth: false,
    }

  getArray(count: number) {
    return new Array(count)
  }
}
