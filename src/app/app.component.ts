import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Slick } from 'ngx-slickjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Alfaiha';
  active: any = 0;
  isScrollerd: boolean = false;
  pathName: Array<any> = [];
  path: any;
  isEn: boolean = true;
  name: any;
  textDir: string = 'rtl';

  constructor(private router: Router, private route: ActivatedRoute, public translate: TranslateService ) {

    translate.addLangs(['en', 'ar']);
    // Set default language
    translate.setDefaultLang('ar');
    translate.use('ar');
    
    // this.route.data.subscribe((eachRoute) => {
      //   console.log("eachRoute", eachRoute['routeName'])
      // })
      
      this.active = localStorage.getItem("active");
    }
    
    ngOnInit(): void {
    console.log(this.translate.currentLang)
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
  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
    this.isEn = !this.isEn;
    if(lang === "ar"){
      this.textDir = 'rtl';
    }
    else {
      this.textDir = 'ltr';
    }
  }

  setActive(event: any) {
    localStorage.setItem("active", event);
    this.active = localStorage.getItem("active");
  }
}
