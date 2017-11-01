import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HappeningsViewComponent } from './happenings-view/happenings-view.component';
import { FilterSectionComponent } from './filter-section/filter-section.component';
import { HappeningSectionComponent } from './happening-section/happening-section.component';
import { HappeningCardComponent } from './happening-section/happening-card/happening-card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HappeningListComponent } from './happening-section/happening-list/happening-list.component';
import { HappeningsService } from './services/happenings.service';
import { reducers } from './store/appState';
import { FilterComponent } from './filter-section/filter/filter.component';
import { LoadHappeningsEffectService } from './store/effects/load-happenings-effect.service';
import { environment } from '../environments/environment';
import { AboutComponent } from './about/about.component';
import { routes } from './app.routes';
import { ThisDayViewComponent } from './this-day-view/this-day-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodaysHappeningsComponent } from './this-day-view/todays-happenings/todays-happenings.component';
import { TodaysLimaComponent } from './this-day-view/todays-lima/todays-lima.component';
import { LoadLiMaEffectService } from './store/effects/load-li-ma-effect.service';
import { LiMaService } from './services/li-ma.service';
import { NoticesComponent } from './notices/notices.component';


// TODO: Consider breaking this into smaller lazy loaded modules instead of using one big one.

@NgModule({
  declarations: [
    AppComponent,
    HappeningsViewComponent,
    FilterSectionComponent,
    HappeningSectionComponent,
    HappeningListComponent,
    HappeningCardComponent,
    NavbarComponent,
    SidebarComponent,
    FilterComponent,
    AboutComponent,
    ThisDayViewComponent,
    TodaysHappeningsComponent,
    TodaysLimaComponent,
    NoticesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: false }),
    StoreRouterConnectingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      LoadHappeningsEffectService,
      LoadLiMaEffectService
    ]),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 25 }) : []
  ],
  providers: [
    HappeningsService,
    LiMaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
