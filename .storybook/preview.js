export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

import Vue from "vue"
import Buefy from "buefy"
import "buefy/dist/buefy.css"
Vue.use(Buefy)

import "@fortawesome/fontawesome-free/js/all"

import { action } from "@storybook/addon-actions"

Vue.component("router-link", {
  props: ["to"],
  methods: {
    log() {
      action("link target")(this.to)
    },
  },
  template: '<a href="#" @click.prevent="log()"><slot>RouterLink</slot></a>',
})
