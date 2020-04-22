import Vue from "vue/dist/vue.esm.js"
import Vuex from "vuex"
Vue.use(Vuex)

import base from "./modules/base"

export default new Vuex.Store({
  strict: process.env.NODE_ENV === "development",
  modules: {
    base: base,
  },
})
