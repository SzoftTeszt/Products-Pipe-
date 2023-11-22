import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
 
  productsColumns = new Subject()

  constructor(private http:HttpClient) {
    this.loadLanguageJson('en')
   }

  loadLanguageJson(sign:any){
    this.http.get('../assets/lang_'+sign+'.json').subscribe(
      (res)=> this.productsColumns.next(res)
    )
  }

  getProductsColumns(){
    return this.productsColumns
  }

  setLanguage(sign:any){
    this.loadLanguageJson(sign)
  }
}
