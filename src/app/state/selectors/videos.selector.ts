import { createSelector } from "@ngrx/store";
import { VideosState } from "src/app/core/models/video.state";
import { AppState } from "../app.state";

export const selectItemFeature = (state: AppState) => state.videos;

export const selectLoading = createSelector(
    selectItemFeature, 
    (state: VideosState) => state.loading!! 
)

export const selectListVideos = createSelector(
    selectItemFeature, 
    (state: VideosState) => state
)

export const selectSearching = createSelector(
    selectItemFeature, 
    (state: VideosState) => state.loading!!
)
