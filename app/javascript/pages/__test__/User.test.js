import { createLocalVue, mount } from "@vue/test-utils"
import Vuex from "vuex"
import Component from "../User"

const email = "test@example.com"
const user = { uuid: "uuid", email: email, name: "name", roles: [] }
const roles = [{ key: "role_management", name: "ロール管理" }]

describe("Component", () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  const stateUser = { user: user }
  const stateRoles = { roles: roles }
  const store = new Vuex.Store({
    modules: {
      user: {
        namespaced: true,
        state: stateUser,
      },
      roles: {
        namespaced: true,
        state: stateRoles,
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
