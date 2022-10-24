import { Component, OnInit } from '@angular/core';
import { Slick } from 'ngx-slickjs';
<<<<<<< HEAD
=======
import { NewsService } from 'src/app/services/news.service';
>>>>>>> 6dec4a8311bef221f9534e96f49db9318d4bd4a6
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
<<<<<<< HEAD
  blogs: any = [];
  url: any = [];
  constructor(private _ser: ProductsService) { }

  ngOnInit(): void {
    this.url = this._ser.basicUrl;
    this.getnewsListFromService();
  }

  getnewsListFromService() {
    return this._ser.getNewsList().subscribe((res: any) => {
      this.blogs = res.data;
       console.log("this.products", this.blogs);

    })
=======
  News: any = [];

  constructor(private _ser: NewsService ,private ser: ProductsService ) { }

  ngOnInit(): void {
    this.getNewsList()
>>>>>>> 6dec4a8311bef221f9534e96f49db9318d4bd4a6
  }
  news: Slick.Config = {
    infinite: true,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: false,
  }
  getNewsList() {
    return this.ser.getNewsList().subscribe((res: any) => {
      this.News = res.data;
      console.log("this.News", this.News);
    })
  }
}
