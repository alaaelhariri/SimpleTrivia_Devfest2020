import { Injectable } from '@angular/core';
import { TriviaQuestion } from '../models';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService extends CrudService<TriviaQuestion> {

}
