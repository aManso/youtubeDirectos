import { VideoModel } from "./video.interface";

export interface VideosState {
    loading?: boolean, 
    filter: any,
    videos: ReadonlyArray<VideoModel>,
    totalResults?: number,
    resultsInPage?: Number,
    prevPageToken?: string,
    nextPageToken?: string,
}