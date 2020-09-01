<template>
  <vs-row class="full-sized" justify="center" align="center">
    <div class="description">
      <h2>{{ fractions.title }}</h2>
      <h3>Author: {{ fractions.author }}</h3>
      <h3>Telegram: {{ fractions.telegram }}</h3>
    </div>
    <div id="fractions-field">
      <Fraction
        v-for="(fr, index) in fractions.data"
        :id="index"
        :key="fr.id"
        :numerator="fr.numerator"
        :denominator="fr.denominator"
        :length="fractions.data.length"
      />
      <Equals :fractions="fractions.data" />
    </div>
    <Buttons :length="fractions.data.length" />
  </vs-row>
</template>

<script>
import { mapState } from 'vuex'
import Fraction from '@/components/Fractions/Fraction'
import Equals from '@/components/Fractions/Equals'
import Buttons from '@/components/Fractions/Buttons'
export default {
  components: {
    Fraction,
    Buttons,
    Equals,
  },
  computed: {
    ...mapState('Fractions', {
      fractions: (state) => state.fractions,
    }),
  },
}
</script>
