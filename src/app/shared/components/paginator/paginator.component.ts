import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';

import { map, Observable } from 'rxjs';
import { PaginatorState } from 'src/app/core/models/paginator.state';
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
  public nextPageToken: string|undefined;

  public constructor(
    private readonly _store: Store<any>,
  ) {
  }

  public ngOnInit(): void {
    this.loading$ = this._store.select(selectPaginatorLoading);
    this._store.select(selectPaginator).pipe(map((response: any)=> response.paginator)).subscribe((paginatorResponse: PaginatorState)=> {
      this.totalResults = paginatorResponse.totalResults;
      this.nextPageToken = paginatorResponse.nextPageToken;
    });
  }

  public previousPage() {

  }

  public nextPage() {
    this._store.dispatch(actionSearchingVideos({ nextPageToken: this.nextPageToken}));
  }
}
