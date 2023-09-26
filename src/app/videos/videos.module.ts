import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VideosDashboardComponent } from './videos-dashboard/videos-dashboard.component';
import { VideoFilterComponent } from './videos-filter/video-filter.component';
import { VideosRoutingModule } from './videos-routing.module';
import { VideoComponent } from './video/video.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorComponent } from '../shared/components/paginator/paginator.component';

@NgModule({
  declarations: [
    VideosDashboardComponent,
    VideoFilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VideosRoutingModule,
    VideoComponent,
    PaginatorComponent,

    InputTextModule,
    ButtonModule,
    DropdownModule,
  ],
})
export class VideosModule { }
