import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  basicUrl = environment.basicUrl;
  blogs: any;

  constructor( private _ser: NewsService) { }

  ngOnInit(): void {
    // this.url = this._ser.basicUrl;
    this.getnewsListFromService();
  }

  getnewsListFromService() {
    return this._ser.getList().subscribe((res: any) => {
      this.blogs = res.data;
      console.log("this.products", this.blogs);

    })
  }

}
