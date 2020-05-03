const SET_USERS = "SET_USERS"

const URL = "/api/v1/users"

const state = {
  users: [],
}

const mutations = {
  [SET_USERS](state, users) {
    state.users = users
  },
}

const actions = {
  fetch: async ({ commit, dispatch }) => {
    commit(SET_USERS, [])
    const data = await dispatch("api/fetch", { url: URL }, { root: true })
    const users = data ? data.users : []
    commit(SET_USERS, users)

    return data
  },
}

const store = {
  namespaced: true,
  state,
  mutations,
  actions,
}

export default store