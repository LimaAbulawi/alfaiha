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

  myParam: any;

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
    console.log("window.location.pathname", window.location.pathname)

    this.searchForm.controls.name.setValue(decodeURIComponent(this.myParam)); // decode for arabic 
     console.log("decodeURIComponent", decodeURIComponent(this.myParam))
    this.getListFromService();
  }

   toUTF(str:any) {       
    var b64 = window.btoa(unescape(encodeURIComponent(str)));
    var str2 = decodeURIComponent(escape(window.atob(b64)));
    return str2;
}

  getListFromService() {

    console.log("(this.searchForm.value)", this.searchForm.value)

    this._ser.search(this.searchForm.value).subscribe((res: any) => {
      
      if (res.code == 500) {
        console.log(res.msg)
      }
      this.ressearch = res.data;
      console.log("res.ressearch", this.ressearch);
      if (res.code == 200) {
        console.log(this.searchForm.value);
        console.log("ressearch", this.ressearch);
      }
    });
  }

}
