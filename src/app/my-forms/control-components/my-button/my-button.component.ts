import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonComponent implements OnInit {

  myFormControl;
  actualForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
