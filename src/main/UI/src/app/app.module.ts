import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContestModule } from './contest/contest.module';
import { WordsListModule } from './words-list/words-list.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContestModule,
    WordsListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
