<template>
  <div v-for="c in cards" :key="c.id">
    <PokemonCard :card="c"/>
  </div>
</template>

<script>
import { onMounted } from "vue"
import Pop from "../utils/Pop.js"
import { cardsService } from '../services/CardsService.js';
import { computed } from '@vue/reactivity';
import PokemonCard from "../components/PokemonCard.vue";
import { AppState } from "../AppState.js";

export default {
    setup() {
        async function getCards() {
            try {
                await cardsService.getCards();
            }
            catch (error) {
                console.error("[]", error);
                Pop.error(error);
            }
        }
        ;
        onMounted(() => {
            getCards();
        });
        return {
            cards: computed(() => AppState.cards)
        };
    },
    components: { PokemonCard }
}
</script>

<style scoped lang="scss">

</style>
