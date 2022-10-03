import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ProductsGalleryComponent } from './components/products-gallery/products-gallery.component';
import { WhoAreWeComponent } from './components/who-are-we/who-are-we.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { NewsComponent } from './components/shared/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductsGalleryComponent,
    WhoAreWeComponent,
    TermsConditionsComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
