import { TableroComponent } from './components/tablero/tablero.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'home', component: HomeComponent 
  },
  { 
    path: 'ranking', component: RankingComponent 
  },
  { 
    path: 'tablero', component: TableroComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
