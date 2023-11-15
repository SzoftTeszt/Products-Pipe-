import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rendezo'
})
export class RendezoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
