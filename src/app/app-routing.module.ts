import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'dynamic-forms',
    loadChildren: './core/core.module#CoreModule'
  },
  {
    path: 'map-dynamic-forms',
    loadChildren: './map-dynamic-forms/map-dynamic-forms.module#MapDynamicFormsModule'
  },
  {
    path: 'dynamic-directive',
    loadChildren: './dynamic-directive-forms/dynamic-directive-forms.module#DynamicDirectiveFormsModule'
  },
  {
    path: 'my-forms',
    loadChildren: './my-forms/my-forms.module#MyFormsModule'
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
export class AppRoutingModule {}
