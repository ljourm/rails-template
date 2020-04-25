import { createLocalVue, shallowMount } from "@vue/test-utils"
import VueRouter from "vue-router"
import Vuex from "vuex"
import Component from "./"

const email = "test@example.com"
const users = [{ uuid: "uuid", email: email, name: "name", roles: [] }]

describe("Component", () => {
  const localVue = createLocalVue()
  localVue.use(VueRouter)
  localVue.use(Vuex)

  const router = new VueRouter()

  const state = { users: users }
  const store = new Vuex.Store({
    modules: {
      users: {
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

  test("emailが表示されること", () => {
    expect(wrapper.find(`emaillink-stub[email="${email}"]`).exists()).toBe(true)
  })
})
