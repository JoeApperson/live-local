import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HappeningVM } from '../happening.vm';

@Component({
  selector: 'lilo-happening-list',
  templateUrl: './happening-list.component.html',
  styleUrls: ['./happening-list.component.scss']
})
export class HappeningListComponent implements OnInit {

  @Input()
  happenings: HappeningVM[] = [];
  @Input()
  loadingData: boolean;
  @Input()
  selectedID: number;
  @Output()
  selected = new EventEmitter<HappeningVM>();

  constructor() { }

  ngOnInit() { }

  selectHappening(happening: HappeningVM) {
    this.selected.emit(happening);
  }
}
