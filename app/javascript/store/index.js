import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

import base from "./modules/base"
import api from "./modules/api"
import user from "./modules/user"
import users from "./modules/users"
import roles from "./modules/roles"

export default new Vuex.Store({
  strict: process.env.NODE_ENV === "development",
  modules: {
    base: base,
    api: api,
    user: user,
    users: users,
    roles: roles,
  },
})
