import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// Components
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

// Modules
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import {DynamicFormComponent} from '../dynamic-form/dynamic-form.component';
import {DynamicFormQuestionComponent} from '../dynamic-form-question/dynamic-form-question.component';
import { DragulaModule } from 'ng2-dragula';
import { DragulaPlaygroundComponent } from '../dragula-playground/dragula-playground.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    DragulaPlaygroundComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DragulaModule.forRoot()
  ],
  exports: [
    AppRoutingModule,
    // We are using the header component selector in the app.component.html
    HeaderComponent,
    FooterComponent
  ],
  providers: []
})
export class CoreModule { }
