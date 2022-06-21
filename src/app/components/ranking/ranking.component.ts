import { Calificacion } from './../../models/calificacion.model';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  public ranking: Calificacion[] = [];
  
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.getRanking();
  }

  getRanking(){
    this._dataService
      .getCalificaciones()
      .subscribe((ranking: any) => {
        this.ranking = ranking.map((e) => {
          return {
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as Calificacion)
          }
        })
      });
  }

}
