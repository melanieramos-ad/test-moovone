import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

export const siteTitle = 'AnimeBrowsr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = siteTitle;

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(siteTitle);
  }
}

