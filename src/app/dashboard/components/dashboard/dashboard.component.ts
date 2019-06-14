import { Component, OnDestroy, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';

import { combineLatest, Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Anime, AnimeService } from '../../services/anime/anime.service';
import { CurrentPageService } from '../../services/current-page.service';
import { User, UserService } from '../../services/user/user.service';
import { AnimeDetailsComponent } from '../anime-details/anime-details.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [CurrentPageService]
})
export class DashboardComponent implements OnDestroy, OnInit {

  animes: Anime[];
  currentPage = 1;
  loading = true;
  maxPage: number;
  user: User;

  private dataSubscription: Subscription;

  constructor(
    private userService: UserService,
    private animeService: AnimeService,
    private pageService: CurrentPageService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    combineLatest(
      this.userService.getUser(),
      this.pageService.currentPage$
    ).pipe(
      switchMap(([user, currentPage]) => {
        this.loading = true;
        this.user = user;
        this.currentPage = currentPage;
        return this.animeService.getAnimeList(currentPage);
      }),
      tap((response) => {
        this.loading = false;
        this.maxPage = response.last_page;
        this.animes = response.results;
      })
    ).subscribe();
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  trackById(index, anime: Anime) {
    return anime.mal_id;
  }

  prevPage() {
    this.pageService.setPage(this.pageService.currentPage - 1);
  }

  nextPage() {
    this.pageService.setPage(this.pageService.currentPage + 1);
  }

  sortList(prop: keyof Anime) {
    this.animes = this.animes.sort((a: Anime, b: Anime) => {
      switch (prop) {
        case 'title': {
          return a.title.localeCompare(b.title);
        }
        case 'score': {
          return a.score - b.score;
        }
        case 'start_date': {
          return new Date(a.start_date).getTime() -  new Date(b.start_date).getTime();
        }
      }
    });
  }

  showDetails(anime: Anime) {
    this.dialog.open(AnimeDetailsComponent, {
      data: {
        anime
      }
    });
  }

}
