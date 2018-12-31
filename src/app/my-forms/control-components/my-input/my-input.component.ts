import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.scss']
})
export class MyInputComponent implements OnInit {

  myFormControl;
  actualForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
