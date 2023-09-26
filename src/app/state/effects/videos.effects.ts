import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { ChannelsService } from 'src/app/videos/videos.service';
import { VideoModel, YoutubeOptions } from 'src/app/core/models/video.interface';
import { VideosState } from 'src/app/core/models/video.state';
import { ACTIONS } from '../actions/videos.actions';
import { Store } from '@ngrx/store';
import { actionLoadedPages, actionLoadingPages } from '../actions/paginator.actions';
import { PaginatorState } from 'src/app/core/models/paginator.state';

@Injectable()
export class VideosEffects {
    constructor(
        private actions$: Actions,
        private _channelsService: ChannelsService,
        private readonly _store: Store<any>,
    ) {}

    loadVideos$ = createEffect(() => this.actions$.pipe(
        ofType(ACTIONS.loadingVideos),
        tap(()=> {this._store.dispatch(actionLoadingPages())}),
        mergeMap(() => 
            this._channelsService.getChannels()
            .pipe(
                map(response => ( {type: ACTIONS.loadedVideos, ...this._buildResponse(response) } )),
                tap((response)=> {
                    this._store.dispatch(actionLoadedPages(this._buildPaginatorModel(response)));
                }),
                catchError(() => EMPTY)
            )
        )
    ));

    private _buildResponse(youtubeResp: any): VideosState {
        return {
            videos: this._buildVideoModel(youtubeResp.items),
            filter: undefined,
            totalResults: youtubeResp.pageInfo.totalResults,
            resultsInPage: youtubeResp.pageInfo.resultsPerPage,
            nextPageToken: youtubeResp.nextPageToken
        }
    }

    private _buildVideoModel(youtubeVideos: any[]): VideoModel[] {
        return youtubeVideos.map((youtubeVideo: any)=> {
            return {
                id: youtubeVideo.id.videoId,
                title: youtubeVideo.snippet.title,
                description: youtubeVideo.snippet.description,
                thumbnail: youtubeVideo.snippet.thumbnails.medium.url,
                publishTime: youtubeVideo.snippet.publishTime,
                channel: {
                    id: youtubeVideo.snippet.channelId,
                    url: '@' + youtubeVideo.snippet.channelTitle.replace(/\s/g, ''),
                    title: youtubeVideo.snippet.channelTitle,
                    thumbnail: '',
                }
            }
        })
    }

    private _buildPaginatorModel(youtubeResp: any): PaginatorState {
        return {
            nextPageToken: youtubeResp.nextPageToken,
            resultsInPage: youtubeResp.resultsInPage,
            totalResults: youtubeResp.totalResults,
        }
    }

    searchVideos$ = createEffect(() => this.actions$.pipe(
        ofType(ACTIONS.searchingVideos),
        tap(()=> {this._store.dispatch(actionLoadingPages())}),
        mergeMap((action) => {
            const filter = this._buildFilter(action);
            return this._channelsService.getChannels(filter)
            .pipe(
                map(response => ( {type: ACTIONS.loadedVideos, ...this._buildResponse(response) } )),
                tap((response)=> {
                    this._store.dispatch(actionLoadedPages(this._buildPaginatorModel(response)));
                }),
                catchError(() => EMPTY)
            )
        })
    ));

    private _buildFilter(action: any): YoutubeOptions {
        return {
            nextPageToken: action.nextPageToken,
            q: action.q,
            topic: action.topic?.value,
            order: action.order,
            regionCode: action.regionCode,
            relevanceLanguage: action.relevanceLanguage,
            videoCaption: action.videoCaption,
            videoDuration: action.videoDuration,
        }
    }
}