import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

// Models
import { QuestionBase } from '../../models/base-class/question-base';

// Services
import { TransformToFormGroupService } from '../../services/transform-to-formgroup.service';
import { TextboxQuestion } from '../../models/textbox';
import { DropdownQuestion } from '../../models/dropdown';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnDestroy {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = ''; // Print the form results

  controlTypes: QuestionBase<any>[] = [
    new TextboxQuestion({
      key: 'lastName',
      label: 'Last Name',
      type: 'text',
      order: 8
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
      order: 9
    })
  ];

  constructor(
    private transformToFormGroupService: TransformToFormGroupService,
    private dragulaService: DragulaService
  ) { }

  ngOnInit() {
    this.form = this.transformToFormGroupService.toFormGroup(this.questions);
    this.createDragulaConfig();
  }

  ngOnDestroy(): void {
    this.dragulaService.destroy('FORM');
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

  onAddTextBox() {
    this.questions = [
      ...this.questions,
      new TextboxQuestion({
        key: 'texboxTest',
        label: 'My textbox',
        value: 'Bombasto',
        required: true,
        order: 7
      })
    ];
    this.form = this.transformToFormGroupService.toFormGroup(this.questions);
    console.log(this.questions);
  }

  onAddDropdown() {
    this.questions = [
      ...this.questions,
      new DropdownQuestion({
        key: 'braveTest',
        label: 'Hardness',
        required: true,
        options: [
          { key: 'soft',  value: 'Soft' },
          { key: 'hard',  value: 'Hard' },
          { key: 'unbroken',   value: 'Unbroken' }
        ],
        order: 8
      })
    ];
    this.form = this.transformToFormGroupService.toFormGroup(this.questions);
    console.log(this.questions);
  }

  private createDragulaConfig() {
    this.dragulaService.createGroup('FORM', {
      copy: (element, source) => {
        return source.id === 'controls';
      },
      copyItem: (control: QuestionBase<any>) => {
        switch (control.controlType) {
          case 'textbox': {
            this.onAddTextBox();
            return new TextboxQuestion({
              key: 'texboxTest',
              label: 'My textbox',
              value: 'Bombasto',
              required: true,
              order: 10
            });
          }
          case 'dropdown': {
            this.onAddDropdown();
            return new TextboxQuestion({
              key: 'texboxTest',
              label: 'My textbox',
              value: 'Bombasto',
              required: true,
              order: 11
            });
          }
        }
      },
      accepts: (el, target, source, sibling) => {
        // To avoid dragging from right to left container
        return target.id !== 'controls';
      }
    });
  }

}
