import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [
    MatDividerModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
