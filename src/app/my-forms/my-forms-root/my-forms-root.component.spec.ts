import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormsRootComponent } from './my-forms-root.component';

describe('MyFormsRootComponent', () => {
  let component: MyFormsRootComponent;
  let fixture: ComponentFixture<MyFormsRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFormsRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
