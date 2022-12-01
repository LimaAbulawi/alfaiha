import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  myParam: any = '';

  searchForm = this.fb.group({
    name: ['', Validators.required],
  })
  ressearch: any;
  serchValue: any;
  url = environment.basicUrl;

  constructor(private route: ActivatedRoute, private router: Router,
    private fb: FormBuilder, private _ser: ProductsService) {
    // router.events.subscribe((params: any) => this.myParam = params['result']);
    // console.log(" this.myParam", this.myParam)
  }
  // code until ...
  ngOnInit() {

    this.myParam = window.location.pathname.split("/").pop();
    console.log(" this.myParam", this.myParam)
    
    this.searchForm.controls.name.setValue(this.myParam);

    this.getListFromService();
  }

  getListFromService() {
    this._ser.search(this.searchForm.value).subscribe((res: any) => {
      this.ressearch = res.data;
      if (res.code == 200) {
      }
      console.log("ressearch", this.ressearch);
    });
  }


}
