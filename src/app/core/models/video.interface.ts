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
    order?: 'date'|'rating'|'relevance'|'title'|'viewCount',
    q?: string,
    topic: string,
    regionCode?: 'EN'|'US'|'GB',
    relevanceLanguage?: 'es'|'en',
    videoCaption?: 'any'|'none'|'closedCaption',
    videoDuration?: 'long'|'medium'|'short'|'none',
}