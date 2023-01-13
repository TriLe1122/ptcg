<template>
  <SearchForm />
  <div class="container">
    <div class="row">
      <div class="col-md-3" v-for="c in cards" :key="c.id">

        <PokemonCard :card="c" />

      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue"
import Pop from "../utils/Pop.js"
import { pokemonService } from '../services/PokemonService.js';
import { computed } from '@vue/reactivity';
import PokemonCard from "../components/PokemonCard.vue";
import { AppState } from "../AppState.js";
import SearchForm from "../components/SearchForm.vue";

export default {
  setup() {
    // async function getCards() {
    //   try {
    //     await cardsService.getCards();
    //   }
    //   catch (error) {
    //     console.error("[]", error);
    //     Pop.error(error);
    //   }
    // }

    async function getPokemon() {
      try {
          await pokemonService.getPokemon()
        } catch (error) {
          console.error('[]',error)
          Pop.error(error)
        }
    }
    onMounted(() => {
      getPokemon()
    });
    return {
      cards: computed(() => AppState.cards)
    };
  },
  components: { PokemonCard, SearchForm }
}
</script>

<style scoped lang="scss">

</style>
