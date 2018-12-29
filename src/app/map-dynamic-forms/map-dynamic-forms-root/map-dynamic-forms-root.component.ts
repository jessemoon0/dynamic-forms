import { Component, OnInit } from '@angular/core';
import { personData } from '../person-example';

@Component({
  selector: 'app-map-dynamic-forms-root',
  templateUrl: './map-dynamic-forms-root.component.html',
  styleUrls: ['./map-dynamic-forms-root.component.scss']
})
export class MapDynamicFormsRootComponent implements OnInit {
  person;

  ngOnInit() {
    this.person = personData;
  }

}
