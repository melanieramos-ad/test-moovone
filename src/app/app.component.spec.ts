import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { AppComponent, siteTitle } from './app.component';

describe('AppComponent', () => {
  let valueServiceSpy: jasmine.SpyObj<Title>;

  beforeEach(async(() => {
    const titleSpy = jasmine.createSpyObj('Title', ['setTitle']);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
      ],
      providers: [
        { provide: Title, useValue: titleSpy }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();

    valueServiceSpy = TestBed.get(Title);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should change the title to the siteTitle in ngOnInit`, async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    app.ngOnInit();
    await fixture.whenStable();

    expect(valueServiceSpy.setTitle.calls.count()).toEqual(1);
    expect(app.title).toEqual(siteTitle);
  });

});
