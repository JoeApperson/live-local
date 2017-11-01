import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';

import { HappeningVM } from '../happening.vm';

@Component({
  selector: 'lilo-happening-card',
  templateUrl: './happening-card.component.html',
  styleUrls: ['./happening-card.component.scss']
})
export class HappeningCardComponent implements OnInit {

  @Input()
  happening: HappeningVM;
  @Input()
  selectedID: number;
  @Output()
  selected = new EventEmitter<HappeningVM>();

  private today = moment().startOf('day');

  constructor() { }

  ngOnInit() { }

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
    return this.happening && this.happening.showEndDate !== null && this.happening.showEndDate !== '';
  }

  getCardClass(): string {
    if (!this.happening) {
      return '';
    }

    if (this.isShowToday()) {
      return 'bg-success text-white';
     } else if (this.isShowThisWeek()) {
      return 'bg-primary text-white';
     } else {
       return 'bg-default text-default';
     }
  }

  isShowToday(): boolean {
    const showDate = moment(this.happening.showDate, 'YYYY-MM-DD').startOf('day');
    return this.happening && (showDate.isSame(this.today));
  }

  isShowThisWeek(): boolean {
    const showDate = moment(this.happening.showDate, 'YYYY-MM-DD').startOf('day');
    return !this.isShowToday() && (showDate.isoWeek() === this.today.isoWeek());
  }
}
