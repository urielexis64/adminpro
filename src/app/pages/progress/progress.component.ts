import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  progress1: number = 0;
  progress2: number = 0;

  getProgress1(maxValue: number) {
    return `${(100 / maxValue) * this.progress1}%`;
  }

  getProgress2(maxValue: number) {
    return `${(100 / maxValue) * this.progress2}%`;
  }
}
