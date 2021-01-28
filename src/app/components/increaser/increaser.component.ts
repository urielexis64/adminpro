import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: [],
})
export class IncreaserComponent implements OnInit {
  @Input('value') value: number = 0;
  @Input('minValue') minValue: number = 0;
  @Input('maxValue') maxValue: number = 100;
  @Input('increaseDecrease') increaseDecrease: number = 5;

  @Input('btnClass') btnClass: string = 'btn-primary';

  @Output('value') changedValue: EventEmitter<number> = new EventEmitter();

  get getPorcentage() {
    return `${this.value}%`;
  }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
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

  onChange(newValue: number) {
    if (newValue >= this.maxValue) {
      this.value = this.maxValue;
    } else if (newValue <= this.minValue) {
      this.value = this.minValue;
    } else {
      this.value = newValue;
    }

    this.changedValue.emit(newValue);
  }
}
