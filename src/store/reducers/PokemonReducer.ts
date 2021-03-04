import {
    POKEMON_FAIL,
    POKEMON_LOADING,
    POKEMON_SUCCESS,
    PokemonDispatchTypes,
    POKEMON_QUERY
  } from "../../types/actions";
import { DefaultStateI } from "../../types/types";
  
  const defaultState: DefaultStateI = {
    loading: false,
    pokemonName: ""
  };
  
  const pokemonReducer = (state: DefaultStateI = defaultState, action: PokemonDispatchTypes) : DefaultStateI => {
    switch (action.type) {
      case POKEMON_FAIL:
        return {
          ...state,
          loading: false,
        }
      case POKEMON_LOADING:
        return {
          ...state, 
          loading: true,
        }
      case POKEMON_SUCCESS:
        return {
          ...state,
          loading: false,
          pokemon: action.payload
        }
      case POKEMON_QUERY:
        return {
          ...state,
          pokemonName: action.payload
        }  
      default:
        return state
    }
  };
  
  
  export default pokemonReducer