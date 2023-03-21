import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReadAllSuperstarComponent} from "./modules/crud/read-all-superstar/read-all-superstar.component";
import {ReadAllChampionshipComponent} from "./modules/crud/read-all-championship/read-all-championship.component";
import {ReadAllTeamComponent} from "./modules/crud/read-all-team/read-all-team.component";
import {ReadAllShowComponent} from "./modules/crud/read-all-show/read-all-show.component";
import {ReadAllPriseComponent} from "./modules/crud/read-all-prise/read-all-prise.component";

const routes: Routes = [
  { path: 'superstar/all', component: ReadAllSuperstarComponent},
  {path: 'championship/all', component: ReadAllChampionshipComponent},
  {path: 'team/all', component: ReadAllTeamComponent},
  {path: 'show/all', component: ReadAllShowComponent},
  {path: 'prise/all', component: ReadAllPriseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
