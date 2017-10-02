import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilterSectionComponent } from './filter-section/filter-section.component';
import { HappeningSectionComponent } from './happening-section/happening-section.component';
import { HappeningCardComponent } from './happening-list/happening-card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HappeningListComponent } from './happening-list/happening-list.component';
import { HappeningsService } from './services/happenings.service';
import { reducers } from './store/appState';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterSectionComponent,
    HappeningSectionComponent,
    HappeningListComponent,
    HappeningCardComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [
    HappeningsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
