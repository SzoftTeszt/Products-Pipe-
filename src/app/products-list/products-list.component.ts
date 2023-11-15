import { Component, OnDestroy } from '@angular/core';
import { BaseService } from '../base.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnDestroy{

    termekek:any
    oszlopok:any

    feliratkozas:any

    constructor(private base:BaseService, private config:ConfigService){

      this.oszlopok=this.config.getProductsColumns()

      this.feliratkozas=this.base.getProducts()
      
      this.feliratkozas.subscribe(
        (adatok:any)=> this.termekek=adatok
      )      
    }




    ngOnDestroy(): void {
      alert("Vége mindennek! "+this.feliratkozas)
      if (this.feliratkozas) this.feliratkozas.unsubscribe()
    }
}
