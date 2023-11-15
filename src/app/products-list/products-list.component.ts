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
    ujTermek:any={}

    szo:any
    hol:any="Mindenhol"
    mezo:any=''

    constructor(private base:BaseService, private config:ConfigService){

      this.oszlopok=this.config.getProductsColumns()

      this.feliratkozas=this.base.getProducts()
      
      this.feliratkozas.subscribe(
        (adatok:any)=> this.termekek=adatok
      )      
    }

    updateProduct(termek:any){
      this.base.updateProduct(termek)
    }

    deleteProduct(termek:any){
      this.base.deleteProduct(termek)
    }
    addProduct(){
      this.base.addProduct(this.ujTermek)
      this.ujTermek={}
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

    ngOnDestroy(): void {
      alert("Vége mindennek! "+this.feliratkozas)
      if (this.feliratkozas) this.feliratkozas.unsubscribe()
    }
}
