import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// It makes avaiable to use http requests
import { HttpClientModule } from'@angular/common/http'

import { ContestRoutingModule } from './contest-routing.module';
import { TContestComponent } from './tcontest/tcontest.component';


@NgModule({
  declarations: [TContestComponent],
  imports: [
    CommonModule,
    ContestRoutingModule,
    HttpClientModule
  ]
})
export class ContestModule { }
