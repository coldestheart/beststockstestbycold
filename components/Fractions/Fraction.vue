<template>
  <div class="fraction-container">
    <div v-if="id > 0" class="arithmetic-signs">+</div>
    <div class="fraction">
      <div v-if="length > 2" class="del" @click="del(id)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 512 512"
          xml:space="preserve"
        >
          <defs />
          <circle cx="256" cy="256" r="256" fill="#e21b1b" />
          <path
            fill="#c40606"
            d="M510 285L368 143 150 369l141 141a256 256 0 00219-225z"
          />
          <g fill="#fff">
            <path
              d="M354 372c-5 0-10-2-14-6L146 172a20 20 0 1129-28l194 193a20 20 0 01-15 35z"
            />
            <path
              d="M161 372a20 20 0 01-15-35l194-193a20 20 0 1129 28L175 366c-4 4-9 6-14 6z"
            />
          </g>
        </svg>
      </div>
      <vs-input
        v-model="Numerator"
        type="number"
        :progress="setFraction(Numerator, 'numerator')"
      />
      <hr />
      <vs-input
        v-model="Denominator"
        type="number"
        :progress="setFraction(Denominator, 'denominator')"
      />
    </div>
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
    id: {
      type: Number,
      default: 0,
    },
    numerator: {
      type: Number,
      default: null,
    },
    denominator: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      Numerator: this.numerator,
      Denominator: this.denominator,
    }
  },
  methods: {
    ...mapMutations({
      set: 'Fractions/SETFraction',
      del: 'Fractions/DELFraction',
    }),
    setFraction(value, type) {
      if (value !== null && value > 99) {
        value = 99
      }
      if (value !== null && value < 1) {
        value = 1
      }
      if (type === 'numerator') {
        this.Numerator = value
      } else {
        this.Denominator = value
      }
      const payload = {}
      payload.value = value
      payload.type = type
      payload.id = this.id
      this.set(payload)
    },
  },
}
</script>
