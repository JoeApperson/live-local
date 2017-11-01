import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApplicationState } from '../store/appState';
import { Store } from '@ngrx/store';

@Component({
  selector: 'lilo-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  region$: Observable<string>;

  constructor(private store: Store<ApplicationState>) {
    this.region$ = store.select(state => state.uiState.currentRegionId);
  }

  ngOnInit() {
  }

}
