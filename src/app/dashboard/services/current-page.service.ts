import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CurrentPageService {

  private _currentPage$ = new BehaviorSubject(1);
  public currentPage$ = this._currentPage$.asObservable();

  constructor() { }

  get currentPage() {
    return this._currentPage$.getValue();
  }

  setPage(newPage: number) {
    if (newPage < 1) {
      this._currentPage$.next(1);
      return;
    }
    this._currentPage$.next(newPage);
  }
}
