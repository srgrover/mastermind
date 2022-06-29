import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';
import { Dificultad } from "src/app/shared/enums/dificultad";
import { DificultadRows } from './../../shared/enums/dificultad-rows';


@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.scss']
})
export class TableroComponent implements OnInit {
  dificultad: number = 0;
  dificultadString: string = "";
  rowsByDificultad: number = 0;

  constructor(private gameSV: GameService) { }

  ngOnInit(): void {
    this.dificultad = this.gameSV.getDificultad();
    this.dificultadString = Dificultad[this.dificultad];
    this.rowsByDificultad = DificultadRows[this.dificultadString];
  }
}
