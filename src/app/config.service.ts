import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private productsColumns=[
    {key:"id", text_hu:"#", type:"plain"},
    {key:"name", text_hu:"Név", type:"text"},
    {key:"price", text_hu:"Ár", type:"number"},
    {key:"description", text_hu:"Leírás", type:"text"},
    {key:"image_url", text_hu:"Kép link", type:"text"},
  ]

  constructor() { }

  getProductsColumns(){
    return this.productsColumns
  }
}
