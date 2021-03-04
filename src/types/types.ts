export interface DefaultStateI {
  loading: boolean,
  pokemonName?: string,
  pokemon?: PokemonType
}

export interface AppProps {
  loading?: boolean,
  pokemon?: PokemonType,
  pokemonName?: string,
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void  
}

export type PokemonType = {
  abilities: PokemonAbility[],
  sprites: PokemonSprites,
  stats: PokemonStat[]
}

export type PokemonAbility = {
  ability: {
    name: string
    url: string
  }
}

export type PokemonSprites = {
  front_default: string
}

export type PokemonStat = {
  base_stat: number,
  stat: {
    name: string
  }
}