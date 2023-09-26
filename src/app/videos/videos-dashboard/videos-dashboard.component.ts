import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { VideoModel } from 'src/app/core/models/video.interface';
import { VideosState } from 'src/app/core/models/video.state';
import { actionLoadingVideos } from 'src/app/state/actions/videos.actions';
import { selectListVideos, selectLoading, selectSearching } from 'src/app/state/selectors/videos.selector';

@Component({
  selector: 'app-videos-dashboard',
  templateUrl: './videos-dashboard.component.html',
  styleUrls: ['./videos-dashboard.component.scss'],
})
export class VideosDashboardComponent implements OnInit {

  public loading$: Observable<boolean> = new Observable();
  public searching$: Observable<boolean> = new Observable();
  public videosResponse$: Observable<VideosState> = new Observable();

  constructor(
    private readonly _store: Store<any>,
  ) {}

  ngOnInit(): void {
      this.loading$ = this._store.select(selectLoading);
      this.searching$ = this._store.select(selectSearching);
      this.videosResponse$ = this._store.select(selectListVideos)
      this._store.dispatch(actionLoadingVideos());
  }

}
