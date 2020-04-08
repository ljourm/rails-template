import api from "lib/api"

const ERROR_MESSAGE_DEFAULT =
  "エラーが発生しました。管理者にお問い合わせください。"
const ERROR_MESSAGE_CONNECTION_FAILED =
  "通信エラーが発生しました。ネットワーク環境を確認し、再度実行してください。このメッセージが繰り返し表示される場合は管理者までお問い合わせください。"

const SET_LOADING = "SET_LOADING"
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE"
const CLEAR_ERROR_MESSAGE = "CLEAR_ERROR_MESSAGE"

const state = {
  loading: false,
  errorMessage: null,
}

const mutations = {
  [SET_LOADING](state, loading) {
    state.loading = loading
  },
  [SET_ERROR_MESSAGE](state, message) {
    state.errorMessage = message
  },
  [CLEAR_ERROR_MESSAGE](state) {
    state.errorMessage = null
  },
}

const actions = {
  logout: async ({ dispatch }) => {
    try {
      await api.delete("/api/v1/users/sessions")
      dispatch("redirectToLogin")
    } catch (error) {
      dispatch("setErrorMessage", error)
    }
  },
  setErrorMessage: ({ commit, dispatch }, error) => {
    let message = ERROR_MESSAGE_DEFAULT
    if (error) {
      if (error.response) {
        if (error.response.status === 401) {
          dispatch("redirectToLogin")
          return
        } else if (error.response.message) {
          message = error.response.message
        }
      } else if (error.request) {
        message = ERROR_MESSAGE_CONNECTION_FAILED
      }
    }

    commit(SET_ERROR_MESSAGE, message)
  },
  redirectToLogin() {
    location.href = "/login"
  },
}

const store = {
  namespaced: true,
  state,
  mutations,
  actions,
}

export default store
