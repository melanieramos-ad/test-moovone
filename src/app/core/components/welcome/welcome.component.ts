import { Component } from '@angular/core';
import { siteTitle } from 'src/app/app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  title = siteTitle;
}
