import { RouterModule, Routes } from '@angular/router';
import { DynamicFormRootComponent } from '../ang-dynamic-forms/dynamic-form-root/dynamic-form-root.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: DynamicFormRootComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
