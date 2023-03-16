import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReadAllSuperstarComponent} from "./modules/crud/read-all-superstar/read-all-superstar.component";

const routes: Routes = [
  { path: 'all', component: ReadAllSuperstarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
