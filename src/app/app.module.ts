import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { ReadAllSuperstarComponent } from './modules/crud/read-all-superstar/read-all-superstar.component';
import {HttpClientModule} from "@angular/common/http";
import { ReadAllChampionshipComponent } from './modules/crud/read-all-championship/read-all-championship.component';
import { ReadAllTeamComponent } from './modules/crud/read-all-team/read-all-team.component';
import { ReadAllShowComponent } from './modules/crud/read-all-show/read-all-show.component';
import { ReadAllPriseComponent } from './modules/crud/read-all-prise/read-all-prise.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ReadAllSuperstarComponent,
    ReadAllChampionshipComponent,
    ReadAllTeamComponent,
    ReadAllShowComponent,
    ReadAllPriseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
