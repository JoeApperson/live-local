import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HappeningVM } from '../happening.vm';

@Component({
  selector: 'lilo-happening-card',
  templateUrl: './happening-card.component.html',
  styleUrls: ['./happening-card.component.css']
})
export class HappeningCardComponent implements OnInit {

  @Input()
  happening: HappeningVM;
  @Input()
  selectedID: number;
  @Output()
  selected = new EventEmitter<HappeningVM>();

  constructor() { }

  ngOnInit() {
  }

  selectHappening(happening: HappeningVM) {
    this.selected.emit(happening);
  }

  isSoldOut(): boolean {
    return (this.happening && this.happening.ticketPrices === 'SOLD OUT');
  }

  isSelected(): boolean {
    return (this.happening && this.happening.id === this.selectedID);
  }

  isMultiDay(): boolean {
    return this.happening && this.happening.showEndDate !== undefined;
  }
}
