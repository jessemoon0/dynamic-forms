import { NgModule } from '@angular/core';
import { DynamicDirectiveFormsRootComponent } from './dynamic-directive-forms-root/dynamic-directive-forms-root.component';
import { SharedModule } from '../shared/shared.module';
import { DynamicDirectiveFormsRoutingModule } from './dynamic-directive-forms-routing.module';

@NgModule({
  declarations: [
    DynamicDirectiveFormsRootComponent
  ],
  imports: [
    SharedModule,
    DynamicDirectiveFormsRoutingModule
  ]
})
export class DynamicDirectiveFormsModule { }
