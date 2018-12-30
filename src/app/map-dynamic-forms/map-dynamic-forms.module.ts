import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MapDynamicFormsRootComponent } from './map-dynamic-forms-root/map-dynamic-forms-root.component';
import { MapDynamicFormsRoutingModule } from './map-dynamic-forms-routing.module';
import { MapDynamicFormsComponent } from './map-dynamic-forms/map-dynamic-forms.component';

@NgModule({
  declarations: [MapDynamicFormsRootComponent, MapDynamicFormsComponent],
  imports: [
    SharedModule,
    MapDynamicFormsRoutingModule
  ]
})
export class MapDynamicFormsModule { }
