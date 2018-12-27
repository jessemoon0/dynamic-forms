import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Modules
import { DragulaModule } from 'ng2-dragula';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

// Components
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from '../dynamic-form-question/dynamic-form-question.component';
import { DragulaPlaygroundComponent } from '../dragula-playground/dragula-playground.component';
import { DragulaFormsComponent } from '../dragula-forms/dragula-forms.component';
import { DynamicFormRootComponent } from '../dynamic-form-root/dynamic-form-root.component';

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
    ReactiveFormsModule,
    AppRoutingModule,
    DragulaModule.forRoot()
  ],
  exports: [
    AppRoutingModule
  ],
  providers: []
})
export class CoreModule { }
