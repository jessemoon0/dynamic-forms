import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';

// Services
import { TransformToFormGroupService } from './ang-dynamic-forms/services/transform-to-formgroup.service';
import { QuestionDataService } from './ang-dynamic-forms/services/question-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './core/header/header.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [TransformToFormGroupService, QuestionDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
