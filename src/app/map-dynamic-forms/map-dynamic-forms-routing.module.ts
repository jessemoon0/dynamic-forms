import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MapDynamicFormsRootComponent } from './map-dynamic-forms-root/map-dynamic-forms-root.component';

const routes: Routes = [
  {
    path: '',
    component: MapDynamicFormsRootComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MapDynamicFormsRoutingModule {}
