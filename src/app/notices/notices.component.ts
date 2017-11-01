import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ApplicationState } from '../store/appState';

@Component({
  selector: 'lilo-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss']
})
export class NoticesComponent implements OnInit {

  notice: string;

  constructor(private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.store.select('uiState').subscribe(uiState => this.notice = uiState.lastErrorMessage);
  }

  close() {
    this.notice = '';
  }
}
