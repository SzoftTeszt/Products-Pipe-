import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rendezo'
})
export class RendezoPipe implements PipeTransform {

  transform(termekek:any) {
    // console.log("termekek", termekek)
    if (!termekek) return null;

    termekek.sort(
      (a:any, b:any)=>{
        // -1,0,1
        return a['name'].localeCompare(b['name'],'hu',{sensitivity:'base'})
      }
    )
    return termekek
  }

}
