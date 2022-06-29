import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-options-dialog',
  templateUrl: './game-options-dialog.component.html',
  styleUrls: ['./game-options-dialog.component.scss']
})
export class GameOptionsDialogComponent implements OnInit {

  //gameSettings: GameSettings;

  constructor(private gameSV: GameService) { }

  ngOnInit(): void {
  }

  onToggleChange(e) {
    //this.gameSettings.dificultad = e.value
    this.gameSV.setDificultad(e.value);
  }
}
