import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service'

@Component({
  selector: 'app-game-carousel',
  templateUrl: './game-carousel.component.html',
  styleUrls: ['./game-carousel.component.css']
})
export class GameCarouselComponent implements OnInit {
  games: any = [];
  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames() {
  this.gamesService.getGames().subscribe(
      res =>  this.games = res,
      err => console.error(err)
    )
  }

}
