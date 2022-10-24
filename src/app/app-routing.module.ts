import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallusComponent } from './components/callus/callus.component';
import { MainComponent } from './components/main/main.component';
import { ProductsGalleryComponent } from './components/products-gallery/products-gallery.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { WhoAreWeComponent } from './components/who-are-we/who-are-we.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "cart", component: ProductsGalleryComponent , data: {routeName: "cart"} },
  { path: "products", component: ProductsGalleryComponent , data: {routeName: "products"} },
  { path: "products/:id", component: SingleProductComponent , data: {routeName: "product"} },
  { path: "weare", component: WhoAreWeComponent},
  { path: "terms&conditions", component: TermsConditionsComponent },
  { path: "callus", component: CallusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
