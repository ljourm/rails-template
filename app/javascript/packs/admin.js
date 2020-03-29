import Vue from "vue/dist/vue.esm"
import App from "components/users"

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    components: { App },
    template: "<app></app>",
  })
})
