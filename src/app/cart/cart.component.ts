import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: any = [];
  url: any = [];

  constructor(private _ser: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.url = this._ser.basicUrl;
    this.getCart()
  }

  getCart() {
    return this._ser.getCart().subscribe((res: any) => {
      this.products = res.data.products;
      console.log("this.products", this.products);
    })
  }
}
