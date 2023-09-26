import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { order, regionCode, relevanceLanguage, Topics, videoCaption, videoDuration } from 'src/app/core/constants/filter-options';
import { actionSearchingVideos } from 'src/app/state/actions/videos.actions';

@Component({
  selector: 'app-video-filter',
  templateUrl: './video-filter.component.html',
  styleUrls: ['./video-filter.component.scss']
})
export class VideoFilterComponent implements OnInit {
  public loading$: Observable<boolean> = new Observable();
  public filterForm: FormGroup;
  public topics = Topics;
  public order = order;
  public regionCode = regionCode;
  public relevanceLanguage = relevanceLanguage;
  public videoCaption = videoCaption;
  public videoDuration = videoDuration;

  public constructor(
    private _fb: FormBuilder,
    private readonly _store: Store<any>,
  ) {
  }

  public ngOnInit(): void {
    this.filterForm = this.createFilterForm();
  }

  private createFilterForm() {
    return this._fb.group({
      q: ['', [Validators.minLength(3), Validators.maxLength(30)]],
      topic: [null],
      order: [null],
      regionCode: [null],
      relevanceLanguage: [null],
      videoCaption: [null],
      videoDuration: [null],
    });
  }

  public search() {
    this._store.dispatch(actionSearchingVideos(this.filterForm.value));
  }

  public reset() {
    this.filterForm.reset();
    this._store.dispatch(actionSearchingVideos({}));
  }
}
