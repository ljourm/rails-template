import {
  SET_LOADING,
  SET_ERROR_MESSAGE,
  CLEAR_ERROR_MESSAGE,
} from "./mutation-types.js"

export default {
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
