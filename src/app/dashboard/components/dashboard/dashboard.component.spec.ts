import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MatDialog } from '@angular/material';

import { AnimeService } from '../../services/anime/anime.service';
import { CurrentPageService } from '../../services/current-page.service';
import { UserService } from '../../services/user/user.service';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    const dialogSpy = jasmine.createSpyObj('MatDialog', ['setTitle']);
    const currentPageSpy = jasmine.createSpyObj('CurrentPageService', ['setPage']);
    const userServiceSpy = jasmine.createSpyObj('UserService', ['getUser']);
    const animeServiceSpy = jasmine.createSpyObj('AnimeService', ['getAnimeList']);

    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: AnimeService, useValue: animeServiceSpy },
        { provide: CurrentPageService, useValue: currentPageSpy },
        { provide: UserService, useValue: userServiceSpy },
        { provide: MatDialog, useValue: dialogSpy }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
