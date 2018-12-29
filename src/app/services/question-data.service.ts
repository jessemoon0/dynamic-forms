import { Injectable } from '@angular/core';
import { QuestionBase } from '../ang-dynamic-forms/models/base-class/question-base';
import { TextboxQuestion } from '../ang-dynamic-forms/models/textbox';
import { DropdownQuestion } from '../ang-dynamic-forms/models/dropdown';

@Injectable()
export class QuestionDataService {

  constructor() { }

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous

  getQuestions() {

    const questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        required: true,
        options: [
          { key: 'solid',  value: 'Solid' },
          { key: 'great',  value: 'Great' },
          { key: 'good',   value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress', // FormControlName
        label: 'Email', // Reference to show errors & Messages
        type: 'email', // Type HTML Input Attribute
        order: 2 // Order to be rendered
      }),

      new TextboxQuestion({
        key: 'lastName',
        label: 'Last Name',
        type: 'text',
        order: 4
      }),

      new DropdownQuestion({
        key: 'brave2',
        label: 'Bravery Rating',
        required: true,
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 5
      }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
