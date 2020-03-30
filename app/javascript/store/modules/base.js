const SET_LOADING = "SET_LOADING"

const state = {
  loading: false,
}

const mutations = {
  [SET_LOADING](state, loading) {
    state.loading = loading
  },
}

const actions = {}

const store = {
  namespaced: true,
  state,
  mutations,
  actions,
}

export default store
