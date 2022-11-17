import { Component, OnInit } from '@angular/core';
import { Slick } from 'ngx-slickjs';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  count: any;
  arrayLength = 10;
  counter :any = 0;

  constructor(private _ser: ProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    window.scroll({
      top: 0,
      behavior: 'smooth'
    });

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
    this.count = this._ser.cartCount().
      subscribe((res: any) => {
        console.log("this.count", res.data);
      });
    localStorage.setItem("count", this.count);

    return this._ser.addToCart(Id).
      subscribe((res: any) => {
        console.log("this.code", res.data);
        if (res.code == 200) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'تم اضافة المنتج الى السلة',
            showConfirmButton: false,
            timer: 1500
          })

          this.counter = document.getElementById('counter');

          this.counter.innerHTML = parseInt( this.counter.innerHTML ) + 1;
          // setTimeout(() => {
          //   window.location.reload();
          // }, 650)
        }
      })
    //
  }

  scroll(Id: number) {
    // this.router.navigate([`/product/${Id}`])
    setTimeout(() => {
      window.location.reload();
    }, 500)
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  ourProducts: Slick.Config = {
    // infinite: true,
    slidesToShow: 6.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // variableWidth: false,
  }

  images: Slick.Config = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true
  }


}
