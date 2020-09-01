export const state = () => ({
  fractions: {
      title: 'Test Work: Fractions',
      author: 'Ilia Ostrovsky',
      telegram: '@coldestheart',
      data: [
    { id: 0, numerator: null, denominator: null },
    { id: 1, numerator: null, denominator: null },
    ],
    },
    id: 1
})

export const mutations = {
  ADDFraction(state) {
    const payload = {
        numerator: null,
        denominator: null,
        id: state.id++
    }
    state.fractions.data.push(payload)
  },
  SETFraction(state, payload) {
    if (payload.type === 'numerator') {
    state.fractions.data[payload.id].numerator = parseInt(payload.value)
    }
    if (payload.type === 'denominator') {
    state.fractions.data[payload.id].denominator = parseInt(payload.value)
    }
  },
  DELFraction(state, payload) {
    // MUCH FASTER THAN FILTER
    state.fractions.data.splice(payload, 1)
  }
}
