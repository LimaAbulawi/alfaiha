import { Component, OnInit } from '@angular/core';
import { Slick } from 'ngx-slickjs';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  products: any = [];
  product: any = [];
  url: any = [];

  constructor(private _ser: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("this.id", id);
    this.url = this._ser.basicUrl;
    this.details(id);
    this.getProductsListFromService();
  }

  getProductsListFromService() {
    return this._ser.getList().subscribe((res: any) => {
      this.products = res.data;
      console.log("this.products", this.products);
    })
  }

  details(Id: any) {
    // this.isShown[Id] = !this.isShown[Id];
    return this._ser.getProduct(Id).
      subscribe((res: any) => {
        this.product = res.data;
        console.log("this.product", this.product);
      })
  }

  addToCart(Id: any) {
    // this.isShown[Id] = !this.isShown[Id];
    return this._ser.addToCart(Id).
      subscribe((res: any) => {

        console.log("this.code", res.data);
        if (res.code == 200) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'تم اضافة المنتج الى السلة',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }
  arrayLength = 10;

  ourProducts: Slick.Config = {
    // infinite: true,
    slidesToShow: 6.5,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 2000,
    // variableWidth: false,
  }

  images: Slick.Config = {
    // infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true
    // variableWidth: false,
  }

}
