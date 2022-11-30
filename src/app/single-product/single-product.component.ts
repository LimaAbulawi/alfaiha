import { Component, OnInit } from '@angular/core';
import { Slick } from 'ngx-slickjs';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  products: any = [];
  product: any = [];
  url: any = [];
  cart: any;
  arrayLength = 10;
  counter: any = 0;
  lang: any;
  isLeft: boolean = true;
  trueorfalse: any;

  constructor(private _ser: ProductsService, private route: ActivatedRoute, private router: Router,
    private translate: TranslateService) {

    translate.onLangChange.subscribe((lang: any) => {
      this.lang = lang.lang;
      if (this.lang == 'ar') {
        this.isLeft = true;
      } else {
        this.isLeft = false;
      }
    })
  }
  ngOnInit(): void {

    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
    this._ser.getCart().
      subscribe((res: any) => {
        this.cart = res.data.products;

      });
    const id = this.route.snapshot.paramMap.get('id');

    this.url = this._ser.basicUrl;
    this.details(id);
    this.getProductsListFromService();
  }

  getProductsListFromService() {
    return this._ser.getList().subscribe((res: any) => {
      this.products = res.data;
    })
  }

  details(Id: any) {
    // this.isShown[Id] = !this.isShown[Id];
    return this._ser.getProduct(Id).
      subscribe((res: any) => {
        this.product = res.data;
      })
  }

  addToCart(Id: any) {
    this.trueorfalse = this.cart.filter((x: any) => { return x.product_id === Id; });
    return this._ser.addToCart(Id).
      subscribe((res: any) => {

        if (res.code == 200) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'تم اضافة المنتج الى السلة',
            showConfirmButton: false,
            timer: 1500
          })
          if (this.trueorfalse.length == 0) {
            this.counter = document.getElementById('counter');
            this.counter.innerHTML = parseInt(this.counter.innerHTML) + 1;
          }
          this._ser.getCart().
            subscribe((res: any) => {
              this.cart = res.data.products;
            });
        }

      })
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
function setState(arg0: { searchField: any; }) {
  throw new Error('Function not implemented.');
}

