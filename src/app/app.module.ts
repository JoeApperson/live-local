import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterSectionComponent,
    HappeningSectionComponent,
    HappeningListComponent,
    HappeningCardComponent,
    SidebarComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([LoadHappeningsEffectService]),
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 25}) : []
  ],
  providers: [
    HappeningsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
