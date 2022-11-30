import { Component, OnInit } from '@angular/core';
import { BagesService } from 'src/app/services/bages.service';

@Component({
  selector: 'app-who-are-we',
  templateUrl: './who-are-we.component.html',
  styleUrls: ['./who-are-we.component.scss']
})
export class WhoAreWeComponent implements OnInit {

  resdata: any;

  constructor(private _ser: BagesService) {
 
   }

  ngOnInit(): void {
    this._ser.getView('about-us').subscribe((res: any) => {
      this.resdata = res.data;
      console.log("about-us", this.resdata);
    });
  }

}
