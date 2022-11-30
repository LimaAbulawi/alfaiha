import { Component, OnInit } from '@angular/core';
import { BagesService } from 'src/app/services/bages.service';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent implements OnInit {
  resdata: any;

  constructor(private _ser: BagesService) {
 
   }

  ngOnInit(): void {
    this._ser.getView('terms_and_conditions').subscribe((res: any) => {
      this.resdata = res.data;
      console.log("terms_and_conditions", this.resdata);
    });
  }

}
