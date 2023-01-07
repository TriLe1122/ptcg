import { AppState } from "../AppState.js";
import { Card } from "../models/Card.js";
import { logger } from "../utils/Logger.js"
import { pokemonapi } from "./AxiosService.js"

class CardsService {
  async getCards() {
    const res = await pokemonapi.get('cards', {
      params: {
        pageSize: 25
      }
    })
    // console.log(res.data);
    
    AppState.cards = res.data.data.map(c => new Card(c))
    console.log(AppState.cards);
  }

}

export const cardsService = new CardsService()