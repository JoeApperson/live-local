import { Component, OnInit } from '@angular/core';
import { HappeningVm } from './happening.vm';
import { Observable } from 'rxjs/Observable';
import { ApplicationState } from '../store/appState';
import { Store } from '@ngrx/store';
import { LoadRegionHappeningsAction } from '../store/actions';
import { HappeningsService } from '../services/happenings.service';
import { stateToHappeningSummariesSelector } from './stateToHappeningSummary';

@Component({
  selector: 'lilo-happening-section',
  templateUrl: './happening-section.component.html',
  styleUrls: ['./happening-section.component.css']
})
export class HappeningSectionComponent implements OnInit {

  happenings$: Observable<HappeningVm[]> = Observable.empty();

  constructor(private store: Store<ApplicationState>, private happService: HappeningsService) {

    this.happenings$ = store.select(stateToHappeningSummariesSelector);
  }

  ngOnInit() {
    this.happService.getHappenings()
      .subscribe(data =>
        this.store.dispatch(new LoadRegionHappeningsAction(data))
      );
  }

}
