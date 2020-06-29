import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TContestComponent } from './tcontest/tcontest.component';


const routes: Routes = [
  { path: 'contest', component: TContestComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestRoutingModule { }
