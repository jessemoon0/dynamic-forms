import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material';

@NgModule({
  exports: [
    MatDividerModule,
    MatButtonModule,
    MatListModule
  ]
})
export class MaterialModule { }
