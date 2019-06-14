import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Anime } from '../../services/anime/anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimeComponent {
  @Input() anime: Anime;
  @Output() viewDetails = new EventEmitter<Anime>();

  constructor() { }

  triggerViewDetails() {
    this.viewDetails.next(this.anime);
  }
}
