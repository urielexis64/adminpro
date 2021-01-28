import { Component, Input } from '@angular/core';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-dognut',
  templateUrl: './dognut.component.html',
  styles: [],
})
export class DognutComponent {
  @Input() title: string = 'No Title';
  @Input() public labels: string[] = [];
  @Input() public data = [];
  @Input() public colors: Color[] = [
    { backgroundColor: ['#6857e6', '#009fee', '#f02059'] },
  ];

  constructor() {}

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
