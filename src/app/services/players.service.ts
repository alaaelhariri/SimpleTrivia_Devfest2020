import { Injectable } from '@angular/core';
import { Player } from '../models';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class PlayersService extends CrudService<Player> {
  incrementScore(player: Player): void {
    player.score++;
    this.update(player);
  }
}
