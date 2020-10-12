import { Component, OnInit } from '@angular/core';
import { Player, TriviaQuestion } from 'src/app/models';
import { PlayersService, QuestionsService } from '../../services';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  players: Player[] = [];
  questions: TriviaQuestion[] = [];

  constructor(
    private playersService: PlayersService,
    private questionsSerive: QuestionsService
  ) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(): void {
    this.players = this.playersService.getAll();
    this.questions = this.questionsSerive.getAll();

    if (this.players.length === 0) {
      this.playersService.create(new Player({
        firstName: 'Alaa',
        lastName: 'El Hariri'
      }));
      console.log('creating player');
    }
    if (this.questions.length === 0) {
      this.questionsSerive.create(new TriviaQuestion({
        question: 'We all know that 8 bits are a byte. But, what are 4 bits called?',
        answer: 'A nibble'
      }));
      console.log('creating question');
    }
  }
}
