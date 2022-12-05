import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ProductsService } from './services/products.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { BagesService } from './services/bages.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Alfaiha';
  // active: any = 0;
  isScrollerd: boolean = false;
  isSearch: boolean = true;
  pathName: Array<any> = [];
  path: any;
  count: any;
  token: any;
  isEn: boolean = true;
  name: any;
  textDir: string = 'rtl';
  slug: any;
  serchValue: any;

  constructor(private router: Router, private route: ActivatedRoute,
    public translate: TranslateService, private _ser: ProductsService, private fb: FormBuilder
    , private ser: BagesService) {

    translate.addLangs(['en', 'ar']);
    // Set default language
    translate.setDefaultLang('ar');
    translate.use('ar');

    // this.route.data.subscribe((eachRoute) => {
    //   console.log("eachRoute", eachRoute['routeName'])
    // })
    // first run
    // if (localStorage.getItem("active") !== null) {
    //   this.active = localStorage.getItem("active");
    // } else {
    //   localStorage.setItem('active', this.active);
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit(): void {
    console.log(this.translate.currentLang);
    // localStorage.removeItem('anonymous-key')
    if (!localStorage.getItem('anonymous-key')) {

      localStorage.setItem('anonymous-key', (Math.random() + 1).toString(36).substring(7));
    }
    console.log(localStorage.getItem('anonymous-key'))
    this.cartCount();
  }

  cartCount() {
    return this._ser.cartCount().subscribe((res: any) => {
      this.count = res.data;
      console.log("this.count", this.count);
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
    if (lang === "ar") {
      this.textDir = 'rtl';
    }
    else {
      this.textDir = 'ltr';
    }
  }

  setActive(event: any, slug: any) {
    // localStorage.setItem("active", event);
    // this.active = localStorage.getItem("active");

    if (slug != 'none') {
      return this.ser.getView(slug).subscribe((res: any) => {
        this.slug = res.data;
        console.log("this.slug", this.slug);
      })
    }
    return false;
  }

  searchForm = this.fb.group({
    name: ['', Validators.required],
  })
  resMsg!: string;

  submit() {
    // this.isSearch = !this.isSearch;
    console.log("searchForm", this.searchForm.value);

    if (this.searchForm.invalid) {
      this.searchForm.markAllAsTouched();
    }
    if (this.searchForm.valid) {
     this.navigateToProducts();
    }

  }
  navigateToProducts() {
    this.serchValue = this.searchForm.controls.name.value;
    console.log("this.serchValueeeeeeee", this.serchValue);
    // this.router.navigate(["search", this.serchValue])
    // if (this.router.url.includes('search')) {
      
      window.location.href='/search/'+this.serchValue;
    // }
   
  }
}
