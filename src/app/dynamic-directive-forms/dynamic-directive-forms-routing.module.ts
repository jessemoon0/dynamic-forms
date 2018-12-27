import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DynamicDirectiveFormsRootComponent } from './dynamic-directive-forms-root/dynamic-directive-forms-root.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicDirectiveFormsRootComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DynamicDirectiveFormsRoutingModule {}
