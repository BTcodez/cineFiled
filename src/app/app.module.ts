import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { FilmComponent } from './film/film.component';
import { SharedComponent } from './shared/shared.component';
import { MyWatchlistComponent } from './watchlist/my-watchlist/my-watchlist.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    WatchlistComponent,
    FilmComponent,
    SharedComponent,
    MyWatchlistComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
