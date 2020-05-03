import { createLocalVue, shallowMount } from "@vue/test-utils"
import Buefy from "buefy"
import Component from "../BuefySample"

describe("Component", () => {
  const localVue = createLocalVue()
  localVue.use(Buefy)

  const wrapper = shallowMount(Component, {
    localVue,
    mocks: {
      $store: {
        state: {
          loading: false,
        },
      },
    },
  })

  test("snapshot", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
