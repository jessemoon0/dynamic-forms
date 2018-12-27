import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDirectiveFormsRootComponent } from './dynamic-directive-forms-root.component';

describe('DynamicDirectiveFormsRootComponent', () => {
  let component: DynamicDirectiveFormsRootComponent;
  let fixture: ComponentFixture<DynamicDirectiveFormsRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicDirectiveFormsRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDirectiveFormsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
