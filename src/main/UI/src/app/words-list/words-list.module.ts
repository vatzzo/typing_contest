import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// It makes avaiable to use http requests
import { HttpClientModule } from'@angular/common/http'

import { WordsListRoutingModule } from './words-list-routing.module';
import { ListComponent } from './list/list.component';




@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    WordsListRoutingModule,
    HttpClientModule
  ]
})
export class WordsListModule { }
