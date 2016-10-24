import { NgModule } from '@angular/core';
import { Routes, RouterModule,RouterLink } from '@angular/router';

import { HomeComponent } from '../home/home/home.component';
import {FeedComponent} from '../feed/feed.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'feed', component: FeedComponent }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})



export class RoutingModule { 
    
}

export const routedComponents = [HomeComponent,FeedComponent];