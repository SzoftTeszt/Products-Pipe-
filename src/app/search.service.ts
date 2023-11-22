import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  private keresesSub = new Subject()

  constructor() { }

  getSearchSub(){
    return this.keresesSub
  }

  setSearchSub(mezo:any, szo:any){
    this.keresesSub.next({nev1:mezo, nev2:szo})
  }

}
