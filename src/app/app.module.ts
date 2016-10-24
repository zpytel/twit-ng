import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { RouterLink} from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
//import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home/home.component';
import {RoutingModule,routedComponents} from './routers/router'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    //FeedComponent,
    HomeComponent,
    routedComponents
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
