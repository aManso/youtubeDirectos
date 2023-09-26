import { createReducer, on } from "@ngrx/store";
import { VideosState } from "src/app/core/models/video.state";
import { actionLoadedVideos, actionLoadingVideos, actionSearchingVideos } from "../actions/videos.actions";

export const initialState : VideosState = { loading: false, videos: [], filter: undefined };

export const videosReducer = createReducer(
    initialState,
    on(actionLoadingVideos, (state) => {
        return { ...state, loading: true };
    }),
    on(actionLoadedVideos, (state, {videos, totalResults}) => {
        return { ...state, loading: false, videos,  totalResults};
    }),
    on(actionSearchingVideos, (state) => {
        return { ...state, loading: true};
    }),
);
