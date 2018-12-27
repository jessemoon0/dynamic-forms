import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormRootComponent } from './dynamic-form-root.component';

describe('DynamicFormRootComponent', () => {
  let component: DynamicFormRootComponent;
  let fixture: ComponentFixture<DynamicFormRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
