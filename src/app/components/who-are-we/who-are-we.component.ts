import { Component, OnInit } from '@angular/core';
import { BagesService } from 'src/app/services/bages.service';

@Component({
  selector: 'app-who-are-we',
  templateUrl: './who-are-we.component.html',
  styleUrls: ['./who-are-we.component.scss']
})
export class WhoAreWeComponent implements OnInit {

  resdata1: any;
  resdata2: any;
  resdata3: any;

  constructor(private _ser: BagesService) {
 
   }

  ngOnInit(): void {
    this._ser.getView('about-us').subscribe((res: any) => {
      this.resdata1 = res.data;
      console.log("about-us", this.resdata1);
    });

    this._ser.getView('vision').subscribe((res: any) => {
      this.resdata2 = res.data;
      console.log("about-us-vision", this.resdata2);
    });

    this._ser.getView('massage').subscribe((res: any) => {
      this.resdata3 = res.data;
      console.log("about-us-massage", this.resdata3);
    });

  }

}
