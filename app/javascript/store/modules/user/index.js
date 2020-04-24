const SET_USER = "SET_USER"

const URL = "/api/v1/users"

const state = {
  user: null,
}

const mutations = {
  [SET_USER](state, user) {
    state.user = user
  },
}

const actions = {
  fetch: async ({ commit, dispatch }, { id }) => {
    const data = await dispatch(
      "api/fetch",
      { url: URL, id: id },
      { root: true }
    )
    const user = data ? data.user : null
    commit(SET_USER, user)

    return data
  },
  submit: async ({ commit, dispatch }, { form }) => {
    const data = await dispatch(
      "api/submit",
      {
        url: URL,
        id: form.uuid,
        data: { user: form },
      },
      { root: true }
    )
    if (data && data.user) {
      commit(SET_USER, data.user)
    }

    return data
  },
  destroy: async ({ commit, dispatch }, { id }) => {
    const result = await dispatch(
      "api/destroy",
      { url: URL, id: id },
      { root: true }
    )

    if (result) {
      commit(SET_USER, null)
      return result
    }
  },
  clear: function ({ commit }) {
    commit(SET_USER, {})
  },
}

const store = {
  namespaced: true,
  state,
  mutations,
  actions,
}

export default store
