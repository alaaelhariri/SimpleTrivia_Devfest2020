import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../models';

@Pipe({
  name: 'player'
})
export class PlayerPipe implements PipeTransform {

  transform(value: Player): string {
    return `${value.lastName.toLocaleUpperCase()} ${value.firstName}`;
  }

}
