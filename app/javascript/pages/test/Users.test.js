import { createLocalVue, mount } from "@vue/test-utils"
import VueRouter from "vue-router"
import Vuex from "vuex"
import Component from "../Users"

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

  const wrapper = mount(Component, {
    localVue,
    router,
    store,
  })

  it("snapshot", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
