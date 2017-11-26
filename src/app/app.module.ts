import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';

// Components
import { AppComponent } from './app.component';

// Services
import { TransformToFormGroupService } from './services/transform-to-formgroup.service';
import {QuestionDataService} from './services/question-data.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [TransformToFormGroupService, QuestionDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
