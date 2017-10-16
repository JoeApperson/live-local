import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ApplicationState } from '../store/appState';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'lilo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {

  @Input()
  title: string;

  selectedRoute: string;

  private sub: Subscription;

  constructor(private store: Store<ApplicationState>) {
    this.sub = store.select(state => state.router)
      .filter(rs => !isNullOrUndefined(rs) && !isNullOrUndefined(rs.state))
      .distinctUntilChanged()
      .subscribe(rs => {
        this.selectedRoute = rs.state.url;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
