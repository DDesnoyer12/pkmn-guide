import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TypeChartComponent } from './pages/type-chart/type-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonComponent,
    NavbarComponent,
    PokedexComponent,
    FooterComponent,
    TypeChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
