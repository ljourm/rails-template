import { createLocalVue, shallowMount } from "@vue/test-utils"
import VueRouter from "vue-router"
import Component from "../UserList"

const email = "test@example.com"
const users = [{ uuid: "uuid", email: email, name: "name", roles: [] }]

describe("Component", () => {
  const localVue = createLocalVue()
  localVue.use(VueRouter)

  const router = new VueRouter()

  const wrapper = shallowMount(Component, {
    localVue,
    router,
    propsData: { users },
  })

  test("snapshot", () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  test("emailが表示されること", () => {
    expect(wrapper.find(`emaillink-stub[email="${email}"]`).exists()).toBe(true)
  })
})
