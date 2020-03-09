import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { TypeChartComponent } from './pages/type-chart/type-chart.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'typechart', component: TypeChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
