import { Component, Input, OnInit } from '@angular/core';
import { HappeningVM } from '../happening.vm';

@Component({
  selector: 'lilo-happening-card',
  templateUrl: './happening-card.component.html',
  styleUrls: ['./happening-card.component.css']
})
export class HappeningCardComponent implements OnInit {

  @Input() happening: HappeningVM;
  constructor() { }

  ngOnInit() {
  }

  isSoldOut(): boolean {
    return this.happening && this.happening.ticketPrices === 'SOLD OUT';
  }

  isNumeric(p: any): boolean {
    return p !== undefined && p !== '' && p !== false && !isNaN(p - 0);
  }
}
