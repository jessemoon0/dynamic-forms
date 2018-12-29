import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from '../ang-dynamic-forms/models/base-class/question-base';

@Injectable()
export class TransformToFormGroupService {

  toFormGroup(questions: QuestionBase<any>[] ) {
    const group: any = {};

    // Add Validators if any
    questions.forEach(question => {
      group[question.key] = question.required ?
        new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });

    // Returns the hole formGroup
    return new FormGroup(group);
  }
}
