import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ProductsService } from './services/products.service';


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
  count: any;
  token: any;
  isEn: boolean = true;
  name: any;
  textDir: string = 'rtl';


  constructor(private router: Router, private route: ActivatedRoute, public translate: TranslateService,private _ser: ProductsService ) {

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
    console.log(this.translate.currentLang);
    // localStorage.removeItem('anonymous-key')
    if( !localStorage.getItem('anonymous-key')){

      localStorage.setItem('anonymous-key', (Math.random() + 1).toString(36).substring(7));

      this.forceLogin();
    }
    console.log( localStorage.getItem('anonymous-key') )
    this.cartCount();


  }

  cartCount() {
    return this._ser.cartCount().subscribe((res: any) => {
      this.count = res.data;
      console.log("this.count", this.count);
    })
  }

  forceLogin() {
    return this._ser.forceLogin().subscribe((res: any) => {
      this.token = res.data.token;
      if( localStorage.getItem('token') == '' ){

        localStorage.setItem('token', this.token);
      }
      console.log("this.token", localStorage.getItem('token'));
    })
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
