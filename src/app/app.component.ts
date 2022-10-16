import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Slick } from 'ngx-slickjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Alfaiha';
  active: number = 0;
  isScrollerd: boolean = false;
  pathName: Array<any> = [];
  path: any;

  constructor(private router: Router ,   private route: ActivatedRoute,) {

    this.route.data.subscribe((eachRoute)=>{
      console.log("eachRoute" , eachRoute['routeName'])
      console.log("lima")
    })
  }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", ["$event"])

  onWindowScroll() {
    //In chrome and some browser scroll is given to body tag
    let pos = (document.documentElement.scrollTop || document.body.scrollTop);
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    if (pos >= 200) {
      //Do your action here
      this.isScrollerd = true;
    } else {
      this.isScrollerd = false;
    }
  }
}
