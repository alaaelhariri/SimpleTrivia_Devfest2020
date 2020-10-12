import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TriviaQuestion } from 'src/app/models';
import { QuestionsService } from 'src/app/services';

@Component({
  selector: 'app-questions-create',
  templateUrl: './questions-create.component.html',
  styleUrls: ['./questions-create.component.scss']
})
export class QuestionsCreateComponent {
  // Question Create used to demonstrate ReactiveFormsModule

  form = this.fb.group({
    questions: this.fb.array([this.questionFormGroup()])
  });

  get questions(): FormArray {
    return this.form.get('questions') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionsService,
    private router: Router) { }

  addQuestion(): void {
    this.questions.push(this.questionFormGroup());
  }

  async submit(): Promise<void> {
    const questions = this.form.value.questions.map(q => new TriviaQuestion(q));
    await this.questionService.createMany(questions);
    this.router.navigate(['']);
  }

  private questionFormGroup(): FormGroup {
    return this.fb.group({
      question: ['', Validators.required],
      answer: ['', Validators.required]
    });
  }
}
