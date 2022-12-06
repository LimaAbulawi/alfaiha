import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss']
})
export class SingleBlogComponent implements OnInit {
  item: any;
  url: any = [];

  constructor( private _ser :NewsService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.url = this._ser.basicUrl;
    this.details(id);
  }
  details(Id: any) {
    // this.isShown[Id] = !this.isShown[Id];
    return this._ser.getView(Id).
      subscribe((res: any) => {
        this.item = res.data;
        console.log("this.item blooog" , this.item)
      })
  }
}
