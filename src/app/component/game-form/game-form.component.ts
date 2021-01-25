import { Component, HostBinding, OnInit } from '@angular/core';
import { Game } from '../../models/Game';
import { GamesService} from '../../services/games.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  game: Game = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  }

  edit: boolean = false;

  constructor(private gamesService: GamesService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activeRoute.snapshot.params;
    if(params.id) {
      this.gamesService.getGame(params.id).subscribe(
        res => {
          console.log(Object.values(res)[0]);
          this.game = Object.values(res)[0];
          this.edit = true
        },
        err => console.log(err)
      )
    }
  }

  saveNewGame() {
    delete this.game.created_at;
    delete this.game.id;
    this.gamesService.saveGame(this.game).subscribe(
      res => {console.log(res);
        this.router.navigate(['/'])
      },
      err => console.error(err)
    )
  }

  updateGame() {
    const params = this.activeRoute.snapshot.params;
    delete this.game.created_at;

    this.gamesService.updateGame(params.id, this.game ).subscribe(
      res =>{
        console.log(res)
      this.router.navigate(['/'])
      },
      err => console.log(err)
    )
  }

}
