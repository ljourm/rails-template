import { createLocalVue, shallowMount } from "@vue/test-utils"
import VueRouter from "vue-router"
import Component from "./"

describe("Component", () => {
  const localVue = createLocalVue()
  localVue.use(VueRouter)
  const router = new VueRouter()

  const wrapper = shallowMount(Component, {
    localVue,
    router,
  })

  test("snapshot", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
