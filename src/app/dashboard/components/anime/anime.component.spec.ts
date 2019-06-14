import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Anime } from '../../services/anime/anime.service';
import { AnimeComponent } from './anime.component';

const testAnime: Anime = {
  episodes: 1,
  image_url: '',
  mal_id: 1,
  score: 2,
  start_date: '2003-04-08T00:00:00+00:00',
  title: 'Test anime'
};

describe('AnimeComponent', () => {
  let component: AnimeComponent;
  let fixture: ComponentFixture<AnimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeComponent);
    component = fixture.componentInstance;
    component.anime = testAnime;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
