import { Component } from '@angular/core';
import { ConfigService } from '../config.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  oszlopok:any
  hol:any="Mindenhol"
  mezo:any=""
  szo:any


  constructor( private config:ConfigService, private search:SearchService){

    this.config.getProductsColumns().subscribe(
      (res:any)=> {if (res)      
      this.oszlopok=res.productsList.productsColumns}
    )
  }

  kiValaszt(mezo:any){
    console.log(mezo)
    if (mezo=='') {
      this.hol="Mindenhol"
      this.mezo=''
    }
    else {
      this.hol=mezo.text_hu
      this.mezo=mezo.key
    }
  }
  keresesInditasa(){
    this.search.setSearchSub(this.mezo, this.szo)
  }

  changeLang(sign:any){
    this.config.setLanguage(sign)
  }
}
