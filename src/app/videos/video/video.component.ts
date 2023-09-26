import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { VideoModel } from 'src/app/core/models/video.interface';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  imports: [ CommonModule],
  standalone: true
})
export class VideoComponent {
  @Input() video: VideoModel;
}
