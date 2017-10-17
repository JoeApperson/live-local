import { Component, Input, OnInit } from '@angular/core';

import { LimaShowVM } from '../lima-show.vm';

@Component({
  selector: 'lilo-todays-lima',
  templateUrl: './todays-lima.component.html',
  styleUrls: ['./todays-lima.component.css']
})
export class TodaysLimaComponent implements OnInit {

  @Input()
  today: Date;
  @Input()
  shows: Array<LimaShowVM>;

  constructor() { }

  ngOnInit() {

  }

}
