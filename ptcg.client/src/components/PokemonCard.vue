<template>
  <div class="card border-0 bg-transparent">

<img :src="card.images" alt="">
  </div>
</template>


<script>
import { Card } from "../models/Card.js";

export default {
  props: {
    card: {
      type: Card,
      required: true
    }
  },
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>