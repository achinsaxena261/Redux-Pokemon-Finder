import { PokemonType } from "./types";

export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_FAIL = "POKEMON_FAIL";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";
export const POKEMON_QUERY = "POKEMON_QUERY";

export interface PokemonLoading {
    type: typeof POKEMON_LOADING,
    payload: string
  }
  
  export interface PokemonFail {
    type: typeof POKEMON_FAIL
  }
  
  export interface PokemonSuccess {
    type: typeof POKEMON_SUCCESS,
    payload: PokemonType
  }
  
  export interface PokemonQuery {
    type: typeof POKEMON_QUERY,
    payload: string
  }
  
  export type PokemonDispatchTypes = PokemonLoading | PokemonFail | PokemonSuccess | PokemonQuery
  