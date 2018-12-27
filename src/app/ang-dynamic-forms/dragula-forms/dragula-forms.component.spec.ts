import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragulaFormsComponent } from './dragula-forms.component';

describe('DragulaFormsComponent', () => {
  let component: DragulaFormsComponent;
  let fixture: ComponentFixture<DragulaFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragulaFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragulaFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
