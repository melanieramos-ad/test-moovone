import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Anime, AnimeService, Picture } from '../../services/anime/anime.service';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.scss'],
})
export class AnimeDetailsComponent implements OnInit {
  anime: Anime;
  pictures: Picture[] = [];
  currentPicture = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { anime: Anime }, private animeService: AnimeService) {}

  ngOnInit() {
    this.anime = this.data.anime;
    this.animeService.getAnimeDetails(this.data.anime.mal_id).subscribe((pictures) => this.pictures = pictures);
  }

  nextPicture() {
    this.currentPicture++;
  }

  prevPicture() {
    this.currentPicture--;
  }

}
