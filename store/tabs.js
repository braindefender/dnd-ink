const state = () => ({
  current: 0
})

const mutations = {
  goto(state, { index }) {
    state.current = index
  }
}

export default { state, mutations, namespaced: true }
