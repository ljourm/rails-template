import api from "lib/api"

import { SET_ERROR_MESSAGE } from "./mutation-types.js"

import {
  ERROR_MESSAGE_DEFAULT,
  ERROR_MESSAGE_NOT_FOUND,
  ERROR_MESSAGE_CONNECTION_FAILED,
} from "./messages.js"

export default {
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
        } else if (error.response.status === 404) {
          message = ERROR_MESSAGE_NOT_FOUND
        } else if (error.response.message) {
          message = error.response.message
        }
      } else if (error.request) {
        message = ERROR_MESSAGE_CONNECTION_FAILED
      }
    }

    commit(SET_ERROR_MESSAGE, message)
  },
  /* istanbul ignore next */
  redirectToLogin() {
    location.href = "/login"
  },
}
