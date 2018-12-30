import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';

// Modules
import { DragulaModule } from 'ng2-dragula';
import { SharedModule } from '../shared/shared.module';

// Components
import { DynamicFormComponent } from '../ang-dynamic-forms/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from '../ang-dynamic-forms/dynamic-form-question/dynamic-form-question.component';
import { DragulaPlaygroundComponent } from '../ang-dynamic-forms/dragula-playground/dragula-playground.component';
import { DragulaFormsComponent } from '../ang-dynamic-forms/dragula-forms/dragula-forms.component';
import { DynamicFormRootComponent } from '../ang-dynamic-forms/dynamic-form-root/dynamic-form-root.component';

@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    DragulaPlaygroundComponent,
    DragulaFormsComponent,
    DynamicFormRootComponent
  ],
  imports: [
    SharedModule,
    CoreRoutingModule,
    DragulaModule.forRoot()
  ]
})
export class CoreModule { }
