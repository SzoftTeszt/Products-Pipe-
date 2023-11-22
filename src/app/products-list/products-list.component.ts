import { Component, OnDestroy } from '@angular/core';
import { BaseService } from '../base.service';
import { ConfigService } from '../config.service';
import { SearchService } from '../search.service';

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
    mezo:any=""
    rendezMezo:any='id'
    irany:any=0

    constructor(private base:BaseService, private config:ConfigService, private search:SearchService){

      this.search.getSearchSub().subscribe(
        (a:any)=>{
          this.mezo=a.nev1
          this.szo=a.nev2
        }
      )

      this.config.getProductsColumns().subscribe(
        (res:any)=>this.oszlopok=res.productsList.productsColumns
      )

      this.feliratkozas=this.base.getProducts()
      
      this.feliratkozas.subscribe(
        (adatok:any)=> this.termekek=adatok
      )      
    }

    updateProduct(termek:any){
      termek.price=Number(termek.price)
      this.base.updateProduct(termek)
    }

    deleteProduct(termek:any){
      this.base.deleteProduct(termek)
    }
    addProduct(){
      this.ujTermek.price=Number(this.ujTermek.price)
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

    rendez(oszlop:any){
        this.irany++
        if (this.irany==3){
          this.irany=0
          this.rendezMezo="id"
        }
        else{
          this.rendezMezo=oszlop.key
        }
    }


    ngOnDestroy(): void {
      alert("Vége mindennek! "+this.feliratkozas)
      if (this.feliratkozas) this.feliratkozas.unsubscribe()
    }

   
}
