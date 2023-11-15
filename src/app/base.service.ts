import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url ="http://localhost:3000/products/"

  private termekekSub=new BehaviorSubject([])

  constructor(private http:HttpClient) {
    this.downloadProducts()
   }

  private downloadProducts(){
    this.http.get(this.url).subscribe(
      (a:any)=>this.termekekSub.next(a)
    )
  }

  getProducts(){
    return this.termekekSub
  }

  deleteProduct(body:any){
    this.http.delete(this.url+body.id).forEach(
      ()=>this.downloadProducts()
    )
  }

  updateProduct(body:any){
    this.http.put(this.url+body.id, body).subscribe(
      ()=>this.downloadProducts()
    )
  }

  addProduct(body:any){
    this.http.post(this.url,body).subscribe(
      ()=>this.downloadProducts()
    )
  }

}
