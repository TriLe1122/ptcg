<template>
  <!-- <div v-for="c in cards" :key="c.id">
    <img :src="c.img" alt="">
  </div> -->
</template>

<script>
import { onMounted } from "vue"
import Pop from "../utils/Pop.js"
import { cardsService } from '../services/CardsService.js';
import { computed } from '@vue/reactivity';

export default {
  setup() {
    async function getCards() {
      try {
          await cardsService.getCards()
        } catch (error) {
          console.error('[]',error)
          Pop.error(error)
        }
    };
    onMounted(() => {
      getCards();
    });

    return {
      cards: computed(() => AppState.cards)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
