import api from "lib/api"

import { BASE_SET_LOADING } from "store/modules/base/mutation-types.js"

const execApi = async ({ commit, dispatch }, { method, url, id, data }) => {
  if (id) {
    url = `${url}/${id}`
  }

  commit(BASE_SET_LOADING, true, { root: true })
  try {
    const res = await api({
      method: method,
      url: url,
      data: data,
    })
    return res.data
  } catch (error) {
    dispatch("base/setErrorMessage", error, { root: true })
  } finally {
    commit(BASE_SET_LOADING, false, { root: true })
  }
}

const actions = {
  fetch: async (context, params) => {
    params.method = "get"

    return await execApi(context, params)
  },
  submit: async (context, params) => {
    params.method = params.id ? "patch" : "post"

    return await execApi(context, params)
  },
  destroy: async (context, params) => {
    params.method = "delete"

    return await execApi(context, params)
  },
}

const store = {
  namespaced: true,
  actions,
}

export default store
