import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

/*
  A smart component base class that automatically releases all registered Observable subscriptions
  when it is destroyed. Register the required subscriptions using addSubscription() or addSubscriptions().
 */
export class BaseSmartComponent implements OnDestroy {

  private activeSubs: Array<Subscription> = [];

  private clearSubscriptions() {
    this.activeSubs.forEach(s => s.unsubscribe());
  }

  protected addSubscription(sub: Subscription) {
    this.activeSubs.push(sub);
  }

  protected addSubscriptions(subs: Array<Subscription>) {
    this.activeSubs.push(...subs);
  }

  ngOnDestroy() {
    this.clearSubscriptions();
  }
}

