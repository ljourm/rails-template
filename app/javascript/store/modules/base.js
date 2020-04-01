import api from "api"

const SET_LOADING = "SET_LOADING"

const state = {
  loading: false,
}

const mutations = {
  [SET_LOADING](state, loading) {
    state.loading = loading
  },
}

const actions = {
  logout: async () => {
    try {
      await api.delete("/api/v1/users/sessions")
      location.href = "/"
    } catch (error) {
      // エラー処理
    }
  },
}

const store = {
  namespaced: true,
  state,
  mutations,
  actions,
}

export default store
