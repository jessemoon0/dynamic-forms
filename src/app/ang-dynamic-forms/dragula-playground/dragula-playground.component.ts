import { Component, OnDestroy, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

class Person {
  id: number;
  constructor(public name: string) {
    this.id = Math.floor(Math.random() * 1000) + 1;
  }
}

@Component({
  selector: 'app-dragula-playground',
  templateUrl: './dragula-playground.component.html',
  styleUrls: ['./dragula-playground.component.scss']
})
export class DragulaPlaygroundComponent implements OnInit, OnDestroy {

  personsLeft = [
    new Person('Steven'),
    new Person('Paula'),
    new Person('Persephone'),
    new Person('Jacob'),
  ];
  personsRight = [
    new Person('Delia'),
    new Person('Jackson'),
  ];

  constructor(private dragulaService: DragulaService) {}

  ngOnInit(): void {
    this.dragulaService.createGroup('PERSON', {
      copy: (element, source) => {
        return source.id === 'left';
      },
      copyItem: (person: Person) => {
        return new Person(person.name);
      },
      accepts: (el, target, source, sibling) => {
        // To avoid dragging from right to left container
        return target.id !== 'left';
      }
    });
  }

  ngOnDestroy(): void {
    this.dragulaService.destroy('PERSON');
  }

}
