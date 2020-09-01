<template>
  <div class="fraction-container">
    <div class="arithmetic-signs">=</div>
    <div class="fraction arithmetic-signs">
      {{ Result }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fractions: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  computed: {
    Result() {
      let result = 0
      this.fractions.forEach((fr) => {
        result = result + fr.numerator / fr.denominator
      })
      if (isNaN(result)) {
        return ''
      } else {
        return result
      }
    },
  },
}
</script>
