import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideosDashboardComponent } from './videos-dashboard/videos-dashboard.component';

const routes: Routes = [
  {
    path: '', component: VideosDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
