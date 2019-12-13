import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interfaces';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  games: Game[] = [];

  constructor( private gameService: GameService ) { }

  ngOnInit() {
    this.gameService.getGames().subscribe((data) => {
      this.games = data;
    });
  }

  chooseGame( game: Game ) {

    this.gameService.chooseGame( game.id )
      .subscribe( (res: any) => {
        if ( res.ok ) {
          Swal.fire({
            title: 'Gracias',
            text: res.mensaje,
            icon: 'success',
          });
        } else {
          Swal.fire({
            title: 'Ooops',
            text: res.mensaje,
            icon: 'error',
          });
        }
      });
  }

}
