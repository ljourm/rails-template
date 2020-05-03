import { mount } from "@vue/test-utils"
import Component from "../NotFound"

describe("Component", () => {
  const wrapper = mount(Component)

  it("snapshot", () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
