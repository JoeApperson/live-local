import { Component, Input } from '@angular/core';
import { ApplicationState } from '../store/appState';
import { Store } from '@ngrx/store';
import { isNullOrUndefined } from 'util';
import { BaseSmartComponent } from '../common/base-smart.component';

@Component({
  selector: 'lilo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent extends BaseSmartComponent {

  @Input()
  title: string;

  selectedRoute: string;
  isCollapsed: boolean;

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
