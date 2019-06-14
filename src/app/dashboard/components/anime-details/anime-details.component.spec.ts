import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MAT_DIALOG_DATA } from '@angular/material';

import { of } from 'rxjs';
import { Anime, AnimeService } from '../../services/anime/anime.service';
import { AnimeDetailsComponent } from './anime-details.component';

const testAnime: Anime = {
  episodes: 1,
  image_url: '',
  mal_id: 1,
  score: 2,
  start_date: '2003-04-08T00:00:00+00:00',
  title: 'Test anime'
};

const testDialogData = {
  anime: testAnime
};
describe('AnimeDetailsComponent', () => {
  let component: AnimeDetailsComponent;
  let fixture: ComponentFixture<AnimeDetailsComponent>;

  beforeEach(async(() => {
    const animeServiceSpy = {
      getAnimeDetails: () => of(testAnime)
    };

    TestBed.configureTestingModule({
      declarations: [ AnimeDetailsComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: AnimeService, useValue: animeServiceSpy },
        { provide: MAT_DIALOG_DATA, useValue: testDialogData }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
