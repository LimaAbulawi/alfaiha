import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private fb: FormBuilder, private _ser: ProductsService) { }


  resMsg!: string;
  confirmOrderForm = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    email: ['', Validators.compose([Validators.email, Validators.required])],
    phone: ['', Validators.required],
    note: ['', Validators.required],
  })

  ngOnInit(): void {
  }
  confirmOrder() {
    
    console.log(this.confirmOrderForm.value);

    if (!this.confirmOrderForm.valid) {
      this.confirmOrderForm.markAllAsTouched();

    } else {
      this._ser.confirmOrder(this.confirmOrderForm.value).subscribe((res: any) => {
        this.resMsg = res.msg;

        if (res.code == 200) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'تم تأكيد الطلب',
            showConfirmButton: false,
            timer: 1500
          })
        }

        console.log("res", res);
      });
    }
  }

}
