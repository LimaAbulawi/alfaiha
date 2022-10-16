import { Component, HostListener, OnInit } from '@angular/core';
import { Slick } from 'ngx-slickjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }
  arrayLength = 10;

  ourProducts: Slick.Config = {
    // infinite: true,
    slidesToShow: 6.5,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 2000 ,
    // variableWidth: false,
    }
  news: Slick.Config = {
    infinite: true,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000 ,
    variableWidth: false,
    }

  getArray(count: number) {
    return new Array(count)
  }
}
