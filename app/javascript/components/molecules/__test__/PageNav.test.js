import { createLocalVue, shallowMount } from "@vue/test-utils"
import VueRouter from "vue-router"
import Buefy from "buefy"
import Component from "../PageNav"

describe("Component", () => {
  const localVue = createLocalVue()
  localVue.use(VueRouter)
  localVue.use(Buefy)

  const wrapper = shallowMount(Component, {
    localVue,
  })

  test("snapshot", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
