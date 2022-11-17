import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: any = [];
  url: any = [];
  productCountity: number = 1;
  isdelete: any;
  product_quantity: any;

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

  adding(product: any) {
    product.quantity += 1;
console.log(product.quantity)
    return this._ser.updateCart( product.product_id, 1).subscribe((res: any) => {
      this.product_quantity = res;
      console.log("this.product_quantity", this.product_quantity);
    })
  }

  subtract(product: any) {
     product.quantity -= 1;

    if (product.quantity == 0) {
      Swal.fire({
        // title: 'Are you sure?',
        text: "Are you sure to delete this item!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          // remove api
          this._ser.delete(product.product_id).subscribe((res: any) => {
            this.isdelete = res;
            console.log(this.isdelete)
            window.location.reload();
          });
        }
      })
    }
  }
}
