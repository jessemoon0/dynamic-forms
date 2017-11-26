import { Component, OnInit } from '@angular/core';
import {QuestionDataService} from '../../services/question-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  questions: any[];

  constructor(private questionDataService: QuestionDataService ) { }

  ngOnInit() {
    this.questions = this.questionDataService.getQuestions();
  }

}
