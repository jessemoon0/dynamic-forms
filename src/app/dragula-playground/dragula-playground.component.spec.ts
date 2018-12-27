import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragulaPlaygroundComponent } from './dragula-playground.component';

describe('DragulaPlaygroundComponent', () => {
  let component: DragulaPlaygroundComponent;
  let fixture: ComponentFixture<DragulaPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragulaPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragulaPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
