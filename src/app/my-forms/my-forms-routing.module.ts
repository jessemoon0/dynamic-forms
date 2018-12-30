import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MyFormsRootComponent } from './my-forms-root/my-forms-root.component';

const routes: Routes = [
  {
    path: '',
    component: MyFormsRootComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MyFormsRoutingModule {}
