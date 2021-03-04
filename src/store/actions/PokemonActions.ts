import { Action, Dispatch } from "redux";
import { POKEMON_FAIL, POKEMON_LOADING, POKEMON_SUCCESS, PokemonDispatchTypes, POKEMON_QUERY } from "../../types/actions";
import { ThunkAction } from 'redux-thunk'
import { RootStore } from "..";

export const GetPokemon = (pokemon: string): ThunkAction<void, RootStore, unknown, Action<PokemonDispatchTypes>> => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
    dispatch({
        type: POKEMON_LOADING,
        payload: pokemon
    })

    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(res => res.json())
        .then(data => dispatch({
            type: POKEMON_SUCCESS,
            payload: data
        }))
        .catch(e => dispatch({
            type: POKEMON_FAIL
        }));
};

export const SetPokemon = (event: React.ChangeEvent<HTMLInputElement>) => {
    return {
        type: POKEMON_QUERY,
        payload: event.target.value
    }
} 