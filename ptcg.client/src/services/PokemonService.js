import { pokeAPI } from "./AxiosService.js"

class PokemonService{
  async getPokemon() {
    const res = await pokeAPI.get("pokemon")
    console.log(res.data);
}
}



export const pokemonService = new PokemonService()