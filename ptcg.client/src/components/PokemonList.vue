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
  <div class="row list">
  <div class="col-md-6" v-for="p in pokemon" :key="p.id">
    <p>{{ p.name }}</p>
  </div>
</div>
</div>
  </div>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";

export default {
  setup(){
    return {
      pokemon: computed(() => AppState.pokemon)
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