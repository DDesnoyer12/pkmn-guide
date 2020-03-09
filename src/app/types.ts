export enum Type {
    GRASS = "grass",
    FIRE = "fire",
    WATER = "water",
    BUG = "bug",
    NORMAL = "normal",
    POISON = "poison",
    ELECTRIC = "electric",
    GROUND = "ground",
    FAIRY = "fairy",
    FIGHTING = "fighting",
    PSYCHIC = "psychic",
    ROCK = "rock",
    GHOST = "ghost",
    ICE = "ice",
    DRAGON = "dragon",
    DARK = "dark",
    STEEL = "steel",
    FLYING = "flying",
}

export const types = [
    Type.GRASS,
    Type.FIRE,
    Type.WATER,
    Type.BUG,
    Type.NORMAL,
    Type.POISON,
    Type.ELECTRIC,
    Type.GROUND,
    Type.FAIRY,
    Type.FIGHTING,
    Type.PSYCHIC,
    Type.ROCK,
    Type.GHOST,
    Type.ICE,
    Type.DRAGON,
    Type.DARK,
    Type.STEEL,
    Type.FLYING
]

/**
 * A matrix of types and their corresponding effectiveness to other types. 
 * Each row represents a type based on its index in the 'types' array, and each column in the row
 * represents another corresponding type in the 'types' array. 
 * For example, matchups[0][0] represents a Grass move against a Grass Pokemon, which deals 0.5x damage.
 */
export const matchups = [
    // GRASS
    [0.5, 0.5, 2, 0.5, 1, 0.5, 1, 2, 1, 1, 1, 2, 1, 1, 0.5, 1, 0.5, 0.5],
    // FIRE
    [2, 0.5, 0.5, 2, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 2, 0.5, 1, 2, 1],
    // WATER
    [0.5, 2, 0.5, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 0.5, 1, 1, 1],
    // BUG
    [2, 0.5, 1, 1, 1, 0.5, 1, 1, 0.5, 0.5, 2, 1, 0.5, 1, 1, 2, 0.5, 0.5],
    // NORMAL
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 1, 0.5, 1],
    // POISON
    [2, 1, 1, 1, 1, 0.5, 1, 0.5, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0, 1],
    // ELECTRIC
    [0.5, 1, 2, 1, 1, 1, 0.5, 0, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 2],
    // GROUND
    [0.5, 2, 1, 0.5, 1, 2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 0],
    // FAIRY
    [1, 0.5, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 0.5, 1],
    // FIGHTING
    [1, 1, 1, 0.5, 2, 1, 1, 1, 0.5, 1, 0.5, 2, 0, 2, 1, 2, 2, 0.5],
    // PSYCHIC
    [1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 0, 0.5, 1],
    // ROCK
    [1, 2, 1, 2, 1, 1, 1, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 0.5, 2],
    // GHOST
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 0.5, 1, 1],
    // ICE
    [2, 0.5, 0.5, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0.5, 2, 1, 0.5, 2],
    // DRAGON
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 0.5, 1],
    // DARK
    [1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 2, 1, 2, 1, 1, 0.5, 1, 1],
    // STEEL
    [1, 0.5, 0.5, 1, 1, 1, 0.5, 1, 2, 1, 1, 2, 1, 2, 1, 1, 0.5, 1],
    // FLYING
    [2, 1, 1, 2, 1, 1, 0.5, 1, 1, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 1]
]
// export const grass: Type = {
//     type: 'Grass',
//     weak: ['Fire', 'Flying', 'Poison', 'Bug', 'Ice'],
//     strong: ['Ground', 'Rock', 'Water'],
//     immune: []
// };
// export const fire: Type = {
//     type: 'Fire',
//     weakD: [],
//     weakA:
//     strongD: ['Bug', 'Grass', 'Ice', 'Steel'],
//     strongA: []
//     immune: []
// };
// export const water: Type = {
//     type: 'Water',
//     weakD: [], 
//     weakA: [],
//     strongD: [], 
//     strongA: [],
//     immune: []
// };
// export const electric: Type = {
//     type: 'Electric',
//     weakD: [], weakA: [],
//     strongD: [], strongA: [],
//     immune: []
// };
// export const normal: Type = {
//     type: 'Normal',
//     weakD: [], weakA: [],
//     strongD: [], strongA: [],
//     immune: []
// };
// export const flying: Type = {
//     type: 'Flying',
//     weakD: [], weakA: [],
//     strongD: [], strongA: [],
//     immune: []
// };
// export const bug: Type = {
//     type: 'Bug',
//     weakD: [], weakA: [],
//     strongD: [], strongA: [],
//     immune: []
// };
// export const poison: Type = {
//     type: 'Poison',
//     weakD: [], weakA: [],
//     strongD: [], strongA: [],
//     immune: []
// };
// export const rock: Type = {
//     type: 'Rock',
//     weakD: [], weakA: [],
//     strongD: [], strongA: [],
//     immune: []
// };
// export const ground: Type = {
//     type: 'Ground',
//     weakD: [], weakA: [],
//     strongD: [], strongA: [],
//     immune: []
// };
// export const steel: Type = {
//     type: 'Steel',
//     weakD: [], weakA: [],
//     strongD: [], strongA: [],
//     immune: []
// };
// export const ice: Type = {
//     type: 'Ice',
//     weakD: [], weakA: [],
//     strongD: [], strongA: [],
//     immune: []
// };
// export const fighting: Type = {
//     type: 'Fighting',
//     weakD: [], weakA: [],
//     strongD: [], strongA: [],
//     immune: []
// };
// export const psychic: Type = {
//     type: 'Psychic',
//     weakD: [], weakA: [],
//     strongD: [], strongA: [],
//     immune: []
// };
// export const ghost: Type = {
//     type: 'Ghost',
//     weakD: [], weakA: [],
//     strongD: [], strongA: [],
//     immune: []
// };
// export const dark: Type = {
//     type: 'Dark',
//     weakD: [], weakA: [],
//     strongD: [], strongA: [],
//     immune: []
// };
// export const fairy: Type = {
//     type: 'Fairy',
//     weakD: [], weakA: [],
//     strongD: [], strongA: [],
//     immune: []
// };
// export const dragon: Type = {
//     type: 'Dragon',
//     weakD: [], weakA: [],
//     strongD: [], strongA: [],
//     immune: []
// };