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


  resMsg!: string;
  confirmOrderForm = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    email: ['', Validators.compose([Validators.email, Validators.required])],
    phone: ['', Validators.required],
    note: ['', Validators.required],
    cart_code: [localStorage.getItem('anonymous-key'), Validators.required],

  })

  constructor(private fb: FormBuilder, private _ser: ProductsService) { 

  }


  ngOnInit(): void {
  }
  
  submit() {
    this.confirmOrderForm.controls.phone.setValue(this.destroyMask(this.confirmOrderForm.controls.phone.value));
    console.log(this.confirmOrderForm.value);
    
    if (this.confirmOrderForm.invalid) {
      this.confirmOrderForm.markAllAsTouched();
    }
    if (this.confirmOrderForm.valid) {
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
          setTimeout(function(){
            localStorage.setItem('anonymous-key', (Math.random() + 1).toString(36).substring(7));
          window.location.reload();
          } ,2000 )
          
          this.confirmOrderForm.reset();
        }
        console.log("res", res);
      });
    }
  }

  onInput(event: any) {
    event.target.value = this.destroyMask(event.target.value);
  }
  destroyMask(event: any) {
    return event.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
  }


}
