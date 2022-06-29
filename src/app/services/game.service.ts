import { Injectable } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private dificultad: number;
  dificultad$: Subject<number>;

  constructor() {
    this.dificultad = 1;
    this.dificultad$ = new Subject();
    this.dificultad$.next(this.dificultad);
  }

  getDificultad(): number{
    return this.dificultad;
  }

  setDificultad(dif: number){
    this.dificultad = dif;
    this.dificultad$.next(this.dificultad);
  }
}
