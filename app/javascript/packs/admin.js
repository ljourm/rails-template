import Vue from "vue/dist/vue.esm"
import Buefy from "buefy"
import "buefy/dist/buefy.css"
Vue.use(Buefy)

import App from "components/users"

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    components: { App },
    template: "<app></app>",
  })
})
