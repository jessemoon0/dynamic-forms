import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDynamicFormsRootComponent } from './map-dynamic-forms-root.component';

describe('MapDynamicFormsRootComponent', () => {
  let component: MapDynamicFormsRootComponent;
  let fixture: ComponentFixture<MapDynamicFormsRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapDynamicFormsRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDynamicFormsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
