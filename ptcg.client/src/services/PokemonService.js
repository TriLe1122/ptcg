import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { pokeAPI } from "./AxiosService.js"

class PokemonService{
  async getPokemon() {
    const res = await pokeAPI.get("pokemon", {
      params: {
        limit: 300,
      }
    })
    // console.log(res.data);
    AppState.pokemon = res.data.results.map((p) => new Pokemon(p))
    console.log(AppState.pokemon);
}
}



export const pokemonService = new PokemonService()