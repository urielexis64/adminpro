import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncreaserComponent } from './increaser/increaser.component';
import { FormsModule } from '@angular/forms';
import { DognutComponent } from './dognut/dognut.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [IncreaserComponent, DognutComponent],
  imports: [CommonModule, FormsModule, ChartsModule],
  exports: [IncreaserComponent, DognutComponent],
})
export class ComponentsModule {}
