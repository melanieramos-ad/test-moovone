import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { AnimeDetailsComponent } from './components/anime-details/anime-details.component';
import { AnimeComponent } from './components/anime/anime.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [UserComponent, DashboardComponent, AnimeComponent, AnimeDetailsComponent],
  imports: [
    CommonModule,

    MaterialModule,

    DashboardRoutingModule
  ],
  entryComponents: [AnimeDetailsComponent]
})
export class DashboardModule { }
