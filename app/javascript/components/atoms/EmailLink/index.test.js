import { mount } from "@vue/test-utils"
import Component from "./"

describe("Component", () => {
  const email = "test@example.com"

  const wrapper = mount(Component, {
    propsData: { email },
  })

  test("snapshot", () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  test("element", () => {
    expect(wrapper.text()).toBe(email)
  })
})
