import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';

import { map, Observable } from 'rxjs';
import { PaginatorState } from 'src/app/core/models/paginator.state';
import { YoutubeOptions } from 'src/app/core/models/video.interface';
import { actionSearchingVideos } from 'src/app/state/actions/videos.actions';
import { selectPaginator, selectPaginatorLoading } from 'src/app/state/selectors/paginator.selector';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
  ],
  encapsulation: ViewEncapsulation.None
})
export class PaginatorComponent implements OnInit {
  public loading$: Observable<boolean> = new Observable();
  public totalResults: number|undefined;
  public prevPageToken: string|undefined;
  public nextPageToken: string|undefined;
  public filter: YoutubeOptions|undefined;

  public constructor(
    private readonly _store: Store<any>,
  ) {
  }

  public ngOnInit(): void {
    this.loading$ = this._store.select(selectPaginatorLoading);
    this._store.select(selectPaginator).pipe(map((response: any)=> response.paginator)).subscribe((paginatorResponse: PaginatorState)=> {
      this.totalResults = paginatorResponse.totalResults;
      this.prevPageToken = paginatorResponse.prevPageToken;
      this.nextPageToken = paginatorResponse.nextPageToken;
      this.filter = paginatorResponse.filter;
    });
  }

  public previousPage() {
    this._store.dispatch(actionSearchingVideos({ ...this.filter, nextPageToken: this.prevPageToken}));
  }

  public nextPage() {
    this._store.dispatch(actionSearchingVideos({ ...this.filter, nextPageToken: this.nextPageToken}));
  }
}
