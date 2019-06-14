import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

export interface Anime {
  mal_id: number;
  episodes: number;
  image_url: string;
  score: number;
  start_date: string;
  title: string;
}

export interface AnimeResponse {
  results: Anime[];
  last_page: number;
}

export interface Picture {
  large: string;
  small: string;
}

export interface PictureResponse {
  pictures: Picture[];
}

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private readonly SEARCH_API_URL = 'https://api.jikan.moe/v3/search/anime';
  private readonly DETAILS_API_URL = 'https://api.jikan.moe/v3/anime';
  private readonly default_search = 'Fate / Zero';
  private readonly type = 'anime';

  constructor(private http: HttpClient) { }

  getAnimeList(page?: number) {
    return this.http.get<AnimeResponse>(this.SEARCH_API_URL, {
      params: {
        q: this.default_search,
        page: page ? page.toString() : '1',
        type: this.type
      }
    });
  }

  getAnimeDetails(animeId: number) {
    return this.http.get<PictureResponse>(`${this.DETAILS_API_URL}/${animeId}/pictures`).pipe(
      map( (response) => response.pictures)
    );
  }
}
