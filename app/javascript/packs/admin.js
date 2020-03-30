import "../stylesheets/application"
import "@fortawesome/fontawesome-free/js/all"

import Vue from "vue/dist/vue.esm"
import Buefy from "buefy"
Vue.use(Buefy)

import store from "store"

import App from "components/users"

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    store,
    el: "#app",
    components: { App },
    template: "<app></app>",
  })
})
