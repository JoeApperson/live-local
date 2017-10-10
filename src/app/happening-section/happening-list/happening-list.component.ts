import { Component, Input, OnInit } from '@angular/core';
import { HappeningVM } from '../happening.vm';

@Component({
  selector: 'lilo-happening-list',
  templateUrl: './happening-list.component.html',
  styleUrls: ['./happening-list.component.css']
})
export class HappeningListComponent implements OnInit {

  @Input()
  happenings: HappeningVM[] = [];
  @Input()
  loadingData: boolean;

  constructor() { }

  ngOnInit() {
  }

}
