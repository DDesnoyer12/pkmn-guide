export class Pokemon {
    id: number;
    pokedex_number: number;
    name: string;
    type1: string;
    type2?: string;
}

export class PokemonDetail {
    id: number;
    pokedex_number: number;
    name: {
        english: string,
        japanese: string,
        french: string,
    }
}