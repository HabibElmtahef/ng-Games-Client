import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Game } from '../models/Game';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  API_URL = 'http://localhost:4000/api';
  constructor(private http: HttpClient) {}

  getGames() {
      return this.http.get(`${this.API_URL}/games`);
    }


    getGame(id: String) {
     return this.http.get(`${this.API_URL}/games/${id}`);
  }

  deleteGame(id: string) {

     return this.http.delete(`${this.API_URL}/deleteGame/${id}`);
  }

  saveGame(game: Game) {
     return this.http.post(`${this.API_URL}/addGame`, game);
  }

  updateGame(id: string|number, updatedGame: Game): Observable<Game> {
      return this.http.put(`${this.API_URL}/updateGame/${id}`, updatedGame);
  }
}
