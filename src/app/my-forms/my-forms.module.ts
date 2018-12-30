import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MyFormsRootComponent } from './my-forms-root/my-forms-root.component';
import { MyFormsRoutingModule } from './my-forms-routing.module';
import { MyDynamicFormsComponent } from './my-dynamic-forms/my-dynamic-forms.component';

@NgModule({
  declarations: [MyFormsRootComponent, MyDynamicFormsComponent],
  imports: [
    SharedModule,
    MyFormsRoutingModule
  ]
})
export class MyFormsModule { }
