// Entry component: Creates the form
import { Component, Input, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

// Models
import {QuestionBase} from '../models/base-class/question-base';

// Services
import {TransformToFormGroupService} from '../services/transform-to-formgroup.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = ''; // Print the form results

  constructor(private transformToFormGroupService: TransformToFormGroupService) { }

  ngOnInit() {
    this.form = this.transformToFormGroupService.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
