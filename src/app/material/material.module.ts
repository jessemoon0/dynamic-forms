import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material';

@NgModule({
  exports: [
    MatDividerModule,
    MatListModule
  ]
})
export class MaterialModule { }
