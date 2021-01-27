import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: [],
})
export class IncreaserComponent {
  @Input('value') value: number;
  @Input() minValue: number;
  @Input() maxValue: number;
  @Input() increaseDecrease: number;

  @Output('value') changedValue: EventEmitter<number> = new EventEmitter();

  get getPorcentage() {
    return `${this.value}%`;
  }

  changeValue(value: number) {
    if (this.value + value <= this.minValue) {
      this.value = this.minValue;
    } else if (this.value + value >= this.maxValue) {
      this.value = this.maxValue;
    } else {
      this.value += value;
    }

    this.changedValue.emit(this.value);
  }
}
