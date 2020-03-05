import { Injectable } from '@angular/core';
import { Pokemon } from './Pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor() { }

  getPokemon(): Observable<Pokemon[]>  {

    return null;
  }


}
