import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncreaserComponent } from './increaser/increaser.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [IncreaserComponent],
  imports: [CommonModule, FormsModule],
  exports: [IncreaserComponent],
})
export class ComponentsModule {}
