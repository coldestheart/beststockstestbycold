<template>
  <div class="buttons-container">
    <vs-button class="add-button" :disabled="length > 4" @click="addFraction()">
      Add New Fraction
    </vs-button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    length: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    ...mapMutations({
      addFraction: 'Fractions/ADDFraction',
    }),
  },
}
</script>
