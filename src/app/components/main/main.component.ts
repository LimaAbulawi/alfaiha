import { Component, HostListener, OnInit } from '@angular/core';
import { Slick } from 'ngx-slickjs';
import { ProductsService } from 'src/app/services/products.service';
import { SlidersService } from 'src/app/services/sliders.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BagesService } from 'src/app/services/bages.service';

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
  about_us:any;
  
  constructor(private _ser: ProductsService, private sliderSer: SlidersService,
    private router: Router, private translate: TranslateService , private ser: BagesService) {

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

    this.ser.getView('about-us').subscribe((res: any) => {
      this.about_us = res.data;
      console.log("about-us", this.about_us);
    });

  }
 

  ourProducts: Slick.Config = {
    infinite: true,
    slidesToShow: 6.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // verticalSwiping : false,
    // variableWidth: false,
    // mouseWheelMove : false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3.5
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }

  slidersSlick: Slick.Config = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
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
