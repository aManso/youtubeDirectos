import { YoutubeOptions } from "./video.interface";

export interface PaginatorState {
    filter?: YoutubeOptions,
    totalResults?: number,
    resultsInPage?: Number,
    prevPageToken?: string,
    nextPageToken?: string,
    loading?: boolean
}