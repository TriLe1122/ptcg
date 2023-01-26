<template>
  <div class="canvas">


<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
  id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Choose your Pokemon!</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <!-- <p>Click a Pokemon, see all cards of that Pokemon</p> -->
  </div>
  <section class="container list">
  <div class="row">
  <div class="col-md-6 selectable" v-for="p in pokemon" :key="p.id" @click="getCardsForPokemon(p.name)">
    <p class="" >{{ p.name }}</p>
    <img :src="p.img" alt="" height="50" width="50">
  </div>
</div>
</section>
</div>
</div>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";
import { cardsService } from "../services/CardsService.js";
import Pop from "../utils/Pop.js";

export default {
  setup(){
    return {
      pokemon: computed(() => AppState.pokemon),
      async getCardsForPokemon(term) {
        try {
            await cardsService.getCardsBySearchTerm(term)
          } catch (error) {
            console.error('[]',error)
            Pop.error(error)
          }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
// .canvas{
//   height: 9vh;
// }
.list{
  overflow-y: scroll;
}

</style>