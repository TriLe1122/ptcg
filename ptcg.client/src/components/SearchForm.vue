<template>
  <form id="search-form" @submit.prevent="handleSubmit()">
    <input type="text" id="search-input" placeholder="Search..."
    v-model="editable.term">
    <button type="submit" id="search-button">Go</button>
  </form>
</template>


<script>
import { ref } from "vue";
import { cardsService } from "../services/CardsService.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async handleSubmit() {
        try {
          await cardsService.getCardsBySearchTerm(editable.value.term)
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

</style>