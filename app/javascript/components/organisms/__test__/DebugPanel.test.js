import { createLocalVue, shallowMount } from "@vue/test-utils"
import VueRouter from "vue-router"
import Vuex from "vuex"
import Component from "../DebugPanel"

describe("Component", () => {
  const localVue = createLocalVue()
  localVue.use(VueRouter)
  localVue.use(Vuex)

  const router = new VueRouter()

  const state = { loading: false }
  const store = new Vuex.Store({
    modules: {
      base: {
        namespaced: true,
        state,
      },
    },
  })

  const wrapper = shallowMount(Component, {
    localVue,
    router,
    store,
  })

  test("snapshot", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
