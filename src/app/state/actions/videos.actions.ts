import { createAction, props } from "@ngrx/store";
import { VideosState } from "src/app/core/models/video.state";

export const ACTIONS = {
    loadingVideos: '[Videos list] loading in live videos',
    loadedVideos: '[Videos list] load in live videos success',
    searchingVideos: '[Search video list] searching in live videos',
}

export const actionLoadingVideos = createAction(
    ACTIONS.loadingVideos
);

export const actionLoadedVideos = createAction(
    ACTIONS.loadedVideos,
    props<VideosState>()
);

export const actionSearchingVideos = createAction(
    ACTIONS.searchingVideos,
    props<any>()
);
