import { Component, OnInit } from '@angular/core';
import { Slick } from 'ngx-slickjs';
import { NewsService } from 'src/app/services/news.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  News: any = [];

  constructor(private _ser: NewsService ,private ser: ProductsService ) { }

  ngOnInit(): void {
    this.getNewsList()
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
