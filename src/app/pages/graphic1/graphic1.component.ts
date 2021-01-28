import { Component } from '@angular/core';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-graphic1',
  templateUrl: './graphic1.component.html',
  styles: [],
})
export class Graphic1Component {
  public labels1: string[] = ['Download Sales', 'In-order Sales', 'Others'];
  public data1 = [[123, 321, 356]];
  public colors1: Color[] = [
    { backgroundColor: ['#6857e6', '#009fee', '#f02059'] },
  ];
  public labels2: string[] = [
    'Download Sales',
    'In-order Sales',
    'Best',
    'Others',
  ];
  public data2 = [[765, 87, 111, 66]];
  public colors2: Color[] = [
    { backgroundColor: ['#a34718', '#fe4466', '#9783ae'] },
  ];
}
