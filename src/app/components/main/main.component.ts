import { Component, HostListener, OnInit } from '@angular/core';
import { Slick } from 'ngx-slickjs';
import { ProductsService } from 'src/app/services/products.service';
import { SlidersService } from 'src/app/services/sliders.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  products: any = [];
  sliders: any = [];
  url: any = [];
  arrayLength = 10;
  lang: any;
  isLeft: boolean = true;

  constructor(private _ser: ProductsService, private sliderSer: SlidersService,
    private router: Router, private translate: TranslateService) {

    translate.onLangChange.subscribe(lang => {
      this.lang = lang.lang;
      if (this.lang == 'ar') {
        this.isLeft = true;
      }else {
        this.isLeft = false;
      }
    })

  }

  ngOnInit(): void {
    this.url = this._ser.basicUrl;
    this.getProductsListFromService();
    this.getSlidersListFromService();
  }

  ourProducts: Slick.Config = {
    infinite: true,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // verticalSwiping : false,
    // variableWidth: false,
    // mouseWheelMove : false,
  }

  slidersSlick: Slick.Config = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    variableWidth: false,
    pauseOnFocus: true
  }

  getProductsListFromService() {
    return this._ser.getList().subscribe((res: any) => {
      this.products = res.data;
      console.log("this.products", this.products);

    })
  }

  getSlidersListFromService() {
    return this.sliderSer.getList().subscribe((res: any) => {
      this.sliders = res.Sliders;
      console.log("this.sliders", this.sliders);
    })
  }


  getArray(count: number) {
    return new Array(count)
  }
  navigateToProducts() {
    this.router.navigate(['products'])
  }
}
