import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/models';
import { PlayersService } from 'src/app/services';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.scss']
})
export class PlayerCreateComponent {
  // Players Create used to demonstrate forms using ngModel

  player: Player = new Player({
    firstName: '',
    lastName: ''
  });

  constructor(private playersService: PlayersService, private router: Router) { }

  async submit(): Promise<void> {
    if (this.player.firstName && this.player.lastName) {
      await this.playersService.create(this.player);
      this.router.navigate(['']);
    }
  }

}
