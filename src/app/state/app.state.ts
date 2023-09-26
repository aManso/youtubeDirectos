import { routerReducer } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";

import { VideosState } from "../core/models/video.state";
import { paginatorReducer } from "./reducers/paginator.reducers";
import { videosReducer } from "./reducers/videos.reducers";

export interface AppState {
    videos: VideosState
}

export const ROOT_REDUCERS: ActionReducerMap<any> = {
    videos: videosReducer,
    paginator: paginatorReducer,
    router: routerReducer,
}