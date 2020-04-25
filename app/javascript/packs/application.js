import "../stylesheets/application"
import "@fortawesome/fontawesome-free/js/all"

import Vue from "vue"
import Buefy from "buefy"
Vue.use(Buefy)

import store from "store"
import router from "router"

import App from "layouts/app"

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    store,
    router,
    el: "#app",
    render: (h) => h(App),
  })
})
