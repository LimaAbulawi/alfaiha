import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CallUsService } from 'src/app/services/call-us.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-callus',
  templateUrl: './callus.component.html',
  styleUrls: ['./callus.component.scss']
})

export class CallusComponent implements OnInit {

  constructor(private fb: FormBuilder, private _ser: CallUsService) { }
  resMsg!: string;


  callUsForm = this.fb.group({
    full_name: ['', Validators.required],
    email: ['', Validators.compose([Validators.email, Validators.required])],
    phone: ['', Validators.required],
    msg_title: ['', Validators.required],
    msg_content: ['', Validators.required],
  })
  ngOnInit(): void {

  }
  submit() {

    this.callUsForm.controls.phone.setValue(this.destroyMask(this.callUsForm.controls.phone.value));
    console.log(this.callUsForm.value);

    if (this.callUsForm.invalid) {
      this.callUsForm.markAllAsTouched();
    }

    if (this.callUsForm.valid) {
      // console.log("lima");
      this._ser.callus(this.callUsForm.value).subscribe((res: any) => {
        this.resMsg = res.msg;
        if (res.code == 200) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'تم ارسال الرسالة ',
            showConfirmButton: false,
            timer: 1500
          })
          this.callUsForm.reset();
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
