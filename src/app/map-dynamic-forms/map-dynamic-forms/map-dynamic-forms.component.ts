import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-map-dynamic-forms',
  templateUrl: './map-dynamic-forms.component.html',
  styleUrls: ['./map-dynamic-forms.component.scss']
})
export class MapDynamicFormsComponent implements OnInit {
  @Input() dataObject;
  form: FormGroup;
  objectProps;

  ngOnInit() {
    // remap the API to be suitable for iterating over it
    this.objectProps = Object.keys(this.dataObject)
      .map(prop => {
        return Object.assign({}, { key: prop} , this.dataObject[prop]);
      });

    // setup the form
    const formGroup = {};
    for (const prop of Object.keys(this.dataObject)) {
      formGroup[prop] = new FormControl(this.dataObject[prop].value || '', this.mapValidators(this.dataObject[prop].validation));
    }

    this.form = new FormGroup(formGroup);
  }

  private mapValidators(validators) {
    const formValidators = [];

    if (validators) {
      for (const validation of Object.keys(validators)) {
        if (validation === 'required') {
          formValidators.push(Validators.required);
        } else if (validation === 'min') {
          formValidators.push(Validators.min(validators[validation]));
        }
      }
    }

    return formValidators;
  }

  onSubmit(form) {
    console.log(form);
  }
}
