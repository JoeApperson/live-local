import { Routes } from '@angular/router';

import { HappeningsViewComponent } from './happenings-view/happenings-view.component';
import { AboutComponent } from './about/about.component';
import { ThisDayViewComponent } from './this-day-view/this-day-view.component';

export const routes: Routes = [
  {
    path: '',
    component: HappeningsViewComponent
  },
  {
    path: 'home',
    component: HappeningsViewComponent
  },
  {
    path: 'happenings',
    component: HappeningsViewComponent
  },
  {
    path: 'thisday',
    component: ThisDayViewComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
