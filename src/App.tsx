import React, { Component } from 'react';
import { Dispatch } from 'redux';
import PokemonSearch from './components/PokemonSearch';
import { connect } from 'react-redux';
import { RootStore } from './store';
import { AppProps } from './types/types';
import { SetPokemon } from './store/actions/PokemonActions';

const mapStateToProps = (state: RootStore): AppProps => ({
  loading: state.pokemon.loading,
  pokemon: state.pokemon.pokemon,
  pokemonName: state.pokemon.pokemonName
});

const mapDispatchToProps = (dispatch: Dispatch): AppProps => ({
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => dispatch(SetPokemon(event))
}); 

class App extends Component<AppProps, RootStore> {
  render() {
    return (
      <div style={{ textAlign:'center', marginTop:'2rem' }}>
        <PokemonSearch {...this.props} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
