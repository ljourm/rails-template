import Vue from "vue/dist/vue.esm.js"
import Vuex from "vuex"
Vue.use(Vuex)

import base from "./modules/base"
import api from "./modules/api"
import user from "./modules/user"

export default new Vuex.Store({
  strict: process.env.NODE_ENV === "development",
  modules: {
    base: base,
    api: api,
    user: user,
  },
})
