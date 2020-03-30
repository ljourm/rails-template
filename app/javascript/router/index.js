import Vue from "vue/dist/vue.esm.js"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import routes from "./routes"

export default new VueRouter({
  routes,
})
