import { Component, Input, OnInit } from '@angular/core';
import { HappeningVM } from '../../happening-section/happening.vm';

@Component({
  selector: 'lilo-todays-happenings',
  templateUrl: './todays-happenings.component.html',
  styleUrls: ['./todays-happenings.component.scss']
})
export class TodaysHappeningsComponent implements OnInit {

  @Input()
  today: Date;
  @Input()
  happenings: HappeningVM[];

  constructor() { }

  ngOnInit() {
  }

}
