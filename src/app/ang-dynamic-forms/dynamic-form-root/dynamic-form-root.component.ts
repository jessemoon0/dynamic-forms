import { Component, OnInit } from '@angular/core';
import { QuestionBase } from '../models/base-class/question-base';
import { QuestionDataService } from '../services/question-data.service';

@Component({
  selector: 'app-dynamic-form-root',
  templateUrl: './dynamic-form-root.component.html',
  styleUrls: ['./dynamic-form-root.component.scss']
})
export class DynamicFormRootComponent implements OnInit {

  questions: QuestionBase<any>[] = [];

  constructor(private questionDataService: QuestionDataService ) { }

  ngOnInit() {
    this.questions = this.questionDataService.getQuestions();
  }

}
