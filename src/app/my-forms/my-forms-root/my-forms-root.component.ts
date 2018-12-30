import { Component, OnInit } from '@angular/core';
import { myFormData } from '../example-data';

@Component({
  selector: 'app-my-forms-root',
  templateUrl: './my-forms-root.component.html',
  styleUrls: ['./my-forms-root.component.scss']
})
export class MyFormsRootComponent implements OnInit {

  formData;

  ngOnInit() {
    this.formData = myFormData;
    console.log(this.formData);
  }

}
