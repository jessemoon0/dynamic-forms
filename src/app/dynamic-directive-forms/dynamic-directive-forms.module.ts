import { NgModule } from '@angular/core';
import { DynamicDirectiveFormsRootComponent } from './dynamic-directive-forms-root/dynamic-directive-forms-root.component';
import { SharedModule } from '../shared/shared.module';
import { DynamicDirectiveFormsRoutingModule } from './dynamic-directive-forms-routing.module';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DateComponent } from './components/date/date.component';
import { InputComponent } from './components/input/input.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { SelectComponent } from './components/select/select.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DynamicDirectiveFormsRootComponent,
    DynamicFormComponent,
    ButtonComponent,
    CheckboxComponent,
    DateComponent,
    InputComponent,
    RadiobuttonComponent,
    SelectComponent,
    DynamicFieldDirective
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    DynamicDirectiveFormsRoutingModule
  ],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent
  ]
})
export class DynamicDirectiveFormsModule { }
