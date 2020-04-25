import { createLocalVue, mount } from "@vue/test-utils"
import Vuex from "vuex"
import Component from "../User"

const email = "test@example.com"
const user = { uuid: "uuid", email: email, name: "name", roles: [] }

describe("Component", () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  const state = { user: user }
  const store = new Vuex.Store({
    modules: {
      user: {
        namespaced: true,
        state,
      },
    },
  })

  const wrapper = mount(Component, {
    localVue,
    store,
  })

  it("snapshot", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
