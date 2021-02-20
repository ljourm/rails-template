const SET_ROLES = "SET_ROLES"

const URL = "/api/v1/roles"

const state = {
  roles: [],
}

const mutations = {
  [SET_ROLES](state, roles) {
    state.roles = roles
  },
}

const actions = {
  fetch: async ({ commit, dispatch }) => {
    commit(SET_ROLES, [])
    const data = await dispatch("api/fetch", { url: URL }, { root: true })
    const roles = data ? data.roles : []
    commit(SET_ROLES, roles)

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
