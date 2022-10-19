import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  currentLang: any;
  
  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event.lang);
      // service here :  send to service event.lang in hedear
    });
  }

  lang() {
    this.currentLang = this.translate.currentLang;
    console.log("currentLang", this.currentLang);
  }
}
