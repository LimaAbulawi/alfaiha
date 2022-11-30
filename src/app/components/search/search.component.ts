import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  myParam: any = '';
  constructor(private route: ActivatedRoute, private router: Router) {
    // router.events.subscribe((params: any) => this.myParam = params['result']);
    // console.log(" this.myParam", this.myParam)
  }
  // code until ...
  ngOnInit() {
    
    
    this.myParam = window.location.pathname.split("/").pop();

    console.log(" this.myParam", this.myParam)
  }
  



}
