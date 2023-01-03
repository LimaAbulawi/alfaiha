import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Slick } from 'ngx-slickjs';
import { NewsService } from 'src/app/services/news.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  blogs: any = [];
  url: any = [];
  lang: any;
  isLeft: boolean = true;
  
  constructor(private router: Router,private _ser: NewsService, private translate: TranslateService) {

    translate.onLangChange.subscribe(lang => {
      this.lang = lang.lang;
      if (this.lang == 'ar') {
        this.isLeft = true;
      } else {
        this.isLeft = false;
      }
    })
  }

  ngOnInit(): void {
    this.url = this._ser.basicUrl;
    this.getnewsListFromService();
  }

  getnewsListFromService() {
    return this._ser.getList().subscribe((res: any) => {
      this.blogs = res.data;
      console.log("this.blogs", this.blogs);

    })
  }
  news: Slick.Config = {
    infinite: true,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: false,
    mouseWheelMove: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.5,
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
  // getNewsList() {
  //   return this.ser.getNewsList().subscribe((res: any) => {
  //     this.News = res.data;
  //     console.log("this.News", this.News);
  //   })
  // }
  navigateToBloges() {
    this.router.navigate(['bolgs'])
  }
}
