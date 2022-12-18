import { Component, OnInit } from '@angular/core';
import { BagesService } from 'src/app/services/bages.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  resdata: any;

  constructor(private _ser: BagesService) {
 
   }

  ngOnInit(): void {
    this._ser.getView('privacy-policy').subscribe((res: any) => {
      this.resdata = res.data;
      console.log("privacy", this.resdata);
    });
  }

}
