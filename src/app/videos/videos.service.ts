import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { catchError, Observable, of } from "rxjs";
import { YoutubeOptions } from "../core/models/video.interface";

const API_KEY= "AIzaSyDed7wJOFHvc2k75sn13DZiO9ZMiaUTFgg";

@Injectable({ providedIn: "root"})
export class ChannelsService {
    private readonly YOUTUBE_ONLINE_CHANNELS_API = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=4&safeSearch=none&type=video&key='+API_KEY;
    
    public constructor(
        private readonly _http: HttpClient,
    ) {}

    /**
     * ....
     * @returns an Observable with a list of channels as response
     */
    public getChannels(youtubeOptions?: YoutubeOptions):Observable<any> {
      const youtubeUrl = youtubeOptions ? this._buildUrlWithParameters(this.YOUTUBE_ONLINE_CHANNELS_API, youtubeOptions) : this.YOUTUBE_ONLINE_CHANNELS_API;
      return this._http.get(youtubeUrl).pipe(
        catchError((e)=> { return of(
          {
            "kind": "youtube#searchListResponse",
            "etag": "ZFTbzO1KH2nx83diVwh2nTQnP3g",
            "nextPageToken": "CDIQAA",
            "regionCode": "ES",
            "pageInfo": {
              "totalResults": 5902,
              "resultsPerPage": 5
            },
            "items": [
              {
                "kind": "youtube#searchResult",
                "etag": "lGVeoyxGWFdmi-csI2_GeQdrShs",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "qbu-oGx00qc"
                },
                "snippet": {
                  "publishedAt": "2023-09-22T09:29:05Z",
                  "channelId": "UCIvaYmXn910QMdemBG3v1pQ",
                  "title": "India-Canada standoff Breaking News LIVE : एक्शन होते ही डर गए खालिस्तानी| Justin Trudeau | Breaking",
                  "description": "भारत ने कनाडा के खिलाफ एक और बड़ा एक्शन लिया है। भारत ने कनाडा के ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/qbu-oGx00qc/default_live.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/qbu-oGx00qc/mqdefault_live.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/qbu-oGx00qc/hqdefault_live.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Zee News",
                  "liveBroadcastContent": "live",
                  "publishTime": "2023-09-22T09:29:05Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "mbx6V0c8_OW2K7LagNubK3ig9fs",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "OOtxXPaQvoM"
                },
                "snippet": {
                  "publishedAt": "2023-08-16T13:40:58Z",
                  "channelId": "UCBi2mrWuNuyYy4gbM6fU18Q",
                  "title": "LIVE: Latest News Headlines and Events l ABC News Live",
                  "description": "breakingnews #livenews #abcnews #news ABC News Live brings you 24/7 coverage of the latest news headlines and events ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/OOtxXPaQvoM/default_live.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/OOtxXPaQvoM/mqdefault_live.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/OOtxXPaQvoM/hqdefault_live.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "ABC News",
                  "liveBroadcastContent": "live",
                  "publishTime": "2023-08-16T13:40:58Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "vPaNZITtDN_tKTKMuaXfBqj_NlA",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "Tc-4DpsqaQw"
                },
                "snippet": {
                  "publishedAt": "2023-09-22T02:24:01Z",
                  "channelId": "UC7wXt18f2iA3EDXeqAVuKng",
                  "title": "India-Canada News: भारत के एक्शन में आते ही नरम पड़े Justin Trudeau के तेवर | PM Modi | R Bharat",
                  "description": "India-Canada News: भारत के एक्शन में आते ही नरम पड़े Justin Trudeau के तेवर | PM Modi | R ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/Tc-4DpsqaQw/default_live.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/Tc-4DpsqaQw/mqdefault_live.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/Tc-4DpsqaQw/hqdefault_live.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "Republic Bharat",
                  "liveBroadcastContent": "live",
                  "publishTime": "2023-09-22T02:24:01Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "K0BnC12bq7747mw5pd0quk-Q4Do",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "ZbT4PZiqQXc"
                },
                "snippet": {
                  "publishedAt": "2023-09-22T08:00:27Z",
                  "channelId": "UCQIycDaLsBpMKjOCeaKUYVg",
                  "title": "🔴 Final Trade Live Updates: Stock Market | Share Market Updates | Latest Business News | CNBC Awaaz",
                  "description": "Business News | Final Trade Live Updates: Stock Market | Share Market Updates | Latest Business News | CNBC Awaaz Share ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/ZbT4PZiqQXc/default_live.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/ZbT4PZiqQXc/mqdefault_live.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/ZbT4PZiqQXc/hqdefault_live.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "CNBC Awaaz.",
                  "liveBroadcastContent": "live",
                  "publishTime": "2023-09-22T08:00:27Z"
                }
              },
              {
                "kind": "youtube#searchResult",
                "etag": "9zA7flGghVL553xBKLoSvgb8QlE",
                "id": {
                  "kind": "youtube#video",
                  "videoId": "annfwfv4yKs"
                },
                "snippet": {
                  "publishedAt": "2023-08-31T20:21:29Z",
                  "channelId": "UCYPvAwZP8pZhSMW8qs7cVCw",
                  "title": "India Today LIVE:  Trudeau On India | Parl Passes Women Quota Bill | India-Canada Spat | Zelensky",
                  "description": "India Today LIVE: RS Passes Quota Bill | India-Canada Row | Parl Spl Session | Debate In Parl Rajya Sabha on Thursday cleared ...",
                  "thumbnails": {
                    "default": {
                      "url": "https://i.ytimg.com/vi/annfwfv4yKs/default_live.jpg",
                      "width": 120,
                      "height": 90
                    },
                    "medium": {
                      "url": "https://i.ytimg.com/vi/annfwfv4yKs/mqdefault_live.jpg",
                      "width": 320,
                      "height": 180
                    },
                    "high": {
                      "url": "https://i.ytimg.com/vi/annfwfv4yKs/hqdefault_live.jpg",
                      "width": 480,
                      "height": 360
                    }
                  },
                  "channelTitle": "India Today",
                  "liveBroadcastContent": "live",
                  "publishTime": "2023-08-31T20:21:29Z"
                }
              }
            ]
          
          
        }) })
      )
    }

    private _buildUrlWithParameters(initialUrl: string, options: YoutubeOptions): string {
      let url = initialUrl;
      url = options.q ? url + '&q=' + options.q : url;
      url = options.topic ? url + '&topicId=' + options.topic : url;
      url = options.order ? url + '&order=' + options.order : url;
      url = options.regionCode ? url + '&regionCode=' + options.regionCode : url;
      url = options.relevanceLanguage ? url + '&relevanceLanguage=' + options.relevanceLanguage : url;
      url = options.videoCaption ? url + '&videoCaption=' + options.videoCaption : url;
      url = options.videoDuration ? url + '&videoDuration=' + options.videoDuration : url;
      return url;
    }

    // public authenticate() {
    //   return gapi.auth2.getAuthInstance()
    //       .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
    //       .then(function() { console.log("Sign-in successful"); },
    //             function(err) { console.error("Error signing in", err); });
    // }

    // public loadClient() {
    //   gapi.client.setApiKey("YOUR_API_KEY");
    //   return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
    //       .then(function() { console.log("GAPI client loaded for API"); },
    //             function(err) { console.error("Error loading GAPI client for API", err); });
    // }

    // // Make sure the client is loaded and sign-in is complete before calling this method.
    // public execute() {
    //   return gapi.client.youtube.search.list({})
    //       .then(function(response) {
    //               // Handle the results here (response.result has the parsed body).
    //               console.log("Response", response);
    //             },
    //             function(err) { console.error("Execute error", err); });
    // }
}
