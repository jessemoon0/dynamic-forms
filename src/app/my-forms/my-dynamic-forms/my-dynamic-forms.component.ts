import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-dynamic-forms',
  templateUrl: './my-dynamic-forms.component.html',
  styleUrls: ['./my-dynamic-forms.component.scss']
})
export class MyDynamicFormsComponent implements OnInit {

  @Input()
  mappedFormData;
  form: FormGroup;
  formData;

  ngOnInit() {
    this.addMapKeyAsKeyProperty();
    console.log(this.formData);
    this.configureForm();
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      console.log('Valid');
      console.log(this.form);
    } else {
      console.log('Invalid');
      this.validateAllFormFields(this.form);
    }
  }

  private addMapKeyAsKeyProperty() {
    this.formData = Object.keys(this.mappedFormData)
      .map(prop => {
        return Object.assign({}, { key: prop} , this.mappedFormData[prop]);
      });
  }

  private configureForm() {
    this.form = new FormGroup({});

    for (const dataSet of this.formData) {

      if (dataSet.type === 'button') { return; }

      const control = new FormControl(
        dataSet.value,
        this.bindValidations(dataSet.validators)
      );

      this.form.addControl(dataSet.key, control);
    }

    console.log(this.form);
  }

  private bindValidations(validators: any) {
    const formValidators = [];

    if (validators.length) {
      for (const validation of validators) {
        if (validation.type === 'required') {
          formValidators.push(Validators.required);
        } else if (validation.type === 'min') {
          formValidators.push(Validators.min(validators[validation]));
        }
      }
    }

    return formValidators;
  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

}
