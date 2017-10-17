import { Component, Input } from '@angular/core';
import { ApplicationState } from '../store/appState';
import { Store } from '@ngrx/store';
import { isNullOrUndefined } from 'util';
import { BaseSmartComponent } from '../shared/base-smart.component';

@Component({
  selector: 'lilo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent extends BaseSmartComponent {

  @Input()
  title: string;

  selectedRoute: string;

  constructor(private store: Store<ApplicationState>) {
    super();
    this.addSubscription(store.select(state => state.router)
      .filter(rs => !isNullOrUndefined(rs) && !isNullOrUndefined(rs.state))
      .distinctUntilChanged()
      .subscribe(rs => {
        this.selectedRoute = rs.state.url;
      }));
  }
}
