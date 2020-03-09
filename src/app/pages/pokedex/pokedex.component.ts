import { Component, OnInit } from '@angular/core';
import { POKEMON } from '../../pkmn';
import { Pokemon } from 'src/app/Pokemon';
import { Title } from '@angular/platform-browser';
import pkmnData from '../../../assets/pokedex.json';
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Pokédex");
  }

  ngOnInit() {
    console.log(pkmnData[0]);
  }
  pokemon = pkmnData;
  search: string;

  filterView(begin: number, end: number) {
    this.pokemon = []
    for(let i = begin; i <= end; i++) {
      this.pokemon.push(pkmnData[i]);
    }
  }

  formatPokedexNumber(dexNo: number): string {
    let temp = String(dexNo);
    if(temp.length < 2) {
      return '00' + temp;
    } else if (temp.length == 2) {
      return '0' + temp;
    } else {
      return temp;
    }
  }

  searchPokemon() {
    this.pokemon = [];
    for(let pkmn of pkmnData) {
      if(pkmn.name['english'].toLowerCase().match(`${this.search.toLowerCase()}`)) {
        this.pokemon.push(pkmn);
      }
    }
  }

}
