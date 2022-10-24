import { Component, OnInit } from '@angular/core';
import { Slick } from 'ngx-slickjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
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
  }
  news: Slick.Config = {
    infinite: true,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000 ,
    variableWidth: false,
    }

}
