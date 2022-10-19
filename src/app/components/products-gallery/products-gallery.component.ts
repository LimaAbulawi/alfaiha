import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-gallery',
  templateUrl: './products-gallery.component.html',
  styleUrls: ['./products-gallery.component.scss']
})
export class ProductsGalleryComponent implements OnInit {

  constructor(private _ser: ProductsService) { }

  ngOnInit(): void {
    // this._ser.lang();
  }

}
