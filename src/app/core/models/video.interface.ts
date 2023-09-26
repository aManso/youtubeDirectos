export interface ChannelModel {
    id: string,
    title: string,
    url: string,
    thumbnail: string
}

export interface VideoModel {
    id: string,
    title: string,
    description: string,
    thumbnail: string,
    publishTime: Date,
    channel: ChannelModel
}

export interface YoutubeOptions {
    pageToken?: string,
    prevPageToken?: string,
    nextPageToken?: string,
    order?: 'date'|'rating'|'relevance'|'title'|'viewCount',
    q?: string,
    topic: string,
    regionCode?: 'EN'|'US'|'GB',
    relevanceLanguage?: 'es'|'en',
    videoCaption?: 'any'|'none'|'closedCaption',
    videoDuration?: 'long'|'medium'|'short'|'none',
}