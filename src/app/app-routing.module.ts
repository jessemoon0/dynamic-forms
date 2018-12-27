import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicFormRootComponent } from './dynamic-form-root/dynamic-form-root.component';

const appRoutes: Routes = [
  {
    path: 'dynamic-forms',
    component: DynamicFormRootComponent
  },
  {
    path: '',
    redirectTo: 'dynamic-forms',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
