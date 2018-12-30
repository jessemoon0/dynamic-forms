import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDynamicFormsComponent } from './my-dynamic-forms.component';

describe('MyDynamicFormsComponent', () => {
  let component: MyDynamicFormsComponent;
  let fixture: ComponentFixture<MyDynamicFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDynamicFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDynamicFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
