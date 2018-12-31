import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MyFormsRootComponent } from './my-forms-root/my-forms-root.component';
import { MyFormsRoutingModule } from './my-forms-routing.module';
import { MyDynamicFormsComponent } from './my-dynamic-forms/my-dynamic-forms.component';
import { DynamicFormControlsDirective } from './directives/dynamic-form-controls.directive';
import { MyButtonComponent } from './control-components/my-button/my-button.component';
import { MyInputComponent } from './control-components/my-input/my-input.component';

@NgModule({
  declarations: [
    MyFormsRootComponent,
    MyDynamicFormsComponent,
    DynamicFormControlsDirective,
    MyButtonComponent,
    MyInputComponent
  ],
  imports: [
    SharedModule,
    MyFormsRoutingModule
  ],
  entryComponents: [
    MyButtonComponent,
    MyInputComponent
  ]
})
export class MyFormsModule { }
