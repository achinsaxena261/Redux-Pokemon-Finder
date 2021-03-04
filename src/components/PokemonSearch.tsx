import React, {PropsWithChildren} from 'react';
import {useDispatch} from "react-redux";
import {GetPokemon} from "../store/actions/PokemonActions";
import { AppProps } from '../types/types';

const PokemonSearch = (props: PropsWithChildren<AppProps>) => {
    const dispatch = useDispatch();
    const {pokemonName, pokemon, handleChange} = props as AppProps;
    const handleSubmit = () => { 
        if(pokemonName) 
            dispatch(GetPokemon(pokemonName)) 
    };
    return (
        <div>
            <input type="text" onChange={handleChange} />
            <button onClick={handleSubmit}>Search</button>
            {pokemon && (
                <div>
                    <img src={pokemon.sprites.front_default} alt="" />
                    {pokemon.abilities.map(ability => {
                        return <p>{ability.ability.name}</p>
                    })}
                </div>
            )}
        </div>
    );
}

export default PokemonSearch;