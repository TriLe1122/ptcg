import { logger } from "../utils/Logger.js"
import { pokemonapi } from "./AxiosService.js"

class CardsService {
  async getCards() {
    const res = await pokemonapi.get('cards')
   console.log(res.data);
  }

}

export const cardsService = new CardsService()