import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rendezo'
})
export class RendezoPipe implements PipeTransform {

  transform(termekek:any, mezo:any, irany:any) {
    // console.log("termekek", termekek)
    if (!termekek) return null;
    if (irany<=1) irany=1
    else irany=-1


    termekek.sort(
      (a:any, b:any)=>{

        if (typeof(a[mezo])=='string')
          return (a[mezo].localeCompare(b[mezo],'hu',{sensitivity:'base'}))*irany
        else return Math.sign(a[mezo]-b[mezo])*irany
      }
    )
    return termekek
  }

}
