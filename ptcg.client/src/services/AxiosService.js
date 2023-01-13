import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

export const pokemonapi = Axios.create({
  baseURL : "https://api.pokemontcg.io/v2/",
  headers: {
    'X-Api-Key': '34aca3f7-b90d-4d5c-bac6-22e19765e181'
  },
  timeout: 8000
})

export const pokeAPI = Axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 8000,
});
