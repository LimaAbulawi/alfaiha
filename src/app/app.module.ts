import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ProductsGalleryComponent } from './components/products-gallery/products-gallery.component';
import { WhoAreWeComponent } from './components/who-are-we/who-are-we.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { NewsComponent } from './components/shared/news/news.component';
import { NgxSlickJsModule } from "ngx-slickjs";
import { CallusComponent } from './components/callus/callus.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductsGalleryComponent,
    WhoAreWeComponent,
    TermsConditionsComponent,
    NewsComponent,
    CallusComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSlickJsModule.forRoot({
      links: {
        jquery: "https://code.jquery.com/jquery-3.4.0.min.js",
        slickJs: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
        slickCss: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css",
        slickThemeCss: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
      }
    }),

  ],
  exports: [NewsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
