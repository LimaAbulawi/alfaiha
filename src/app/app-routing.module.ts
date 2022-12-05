import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallusComponent } from './components/callus/callus.component';
import { MainComponent } from './components/main/main.component';
import { ProductsGalleryComponent } from './components/products-gallery/products-gallery.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { WhoAreWeComponent } from './components/who-are-we/who-are-we.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { ReturnPolicyComponent } from './components/return-policy/return-policy.component';
import { ShippingPolicyComponent } from './components/shipping-policy/shipping-policy.component';
import { AuthorizedDistributorsComponent } from './components/authorized-distributors/authorized-distributors.component';
import { SearchComponent } from './components/search/search.component';
import { BlogsComponent } from './components/blogs/blogs.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "main", component: MainComponent },
  { path: "cart", component: CartComponent , data: {routeName: "cart"} },
  { path: "checkout", component: CheckoutComponent , data: {routeName: "checkout"} },
  { path: "products", component: ProductsGalleryComponent , data: {routeName: "products"} },
  { path: "product/:id", component: SingleProductComponent , data: {routeName: "product"} },
  { path: "weare", component: WhoAreWeComponent},
  { path: "terms&conditions", component: TermsConditionsComponent },
  { path: "privacy_policy", component: PrivacyPolicyComponent },
  { path: "callus", component: CallusComponent },
  { path: "returnPolicy", component: ReturnPolicyComponent },
  { path: "ShippingPolicy", component: ShippingPolicyComponent },
  { path: "AuthorizedDistributors", component: AuthorizedDistributorsComponent },
  { path: "search/:result", component: SearchComponent },
  { path: "bolgs", component: BlogsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
