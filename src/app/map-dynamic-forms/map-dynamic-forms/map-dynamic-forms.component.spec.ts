import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDynamicFormsComponent } from './map-dynamic-forms.component';

describe('MapDynamicFormsComponent', () => {
  let component: MapDynamicFormsComponent;
  let fixture: ComponentFixture<MapDynamicFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapDynamicFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDynamicFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
