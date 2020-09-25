import { createLocalVue, mount } from "@vue/test-utils"
import Component from "../UserForm"

const email = "test@example.com"
const user = { uuid: "uuid", email: email, name: "name" }

describe("Component", () => {
  const localVue = createLocalVue()

  const wrapper = mount(Component, {
    localVue,
    propsData: { user },
  })

  it("submit event", () => {
    wrapper.find("form").trigger("submit")
    expect(wrapper.emitted("submit")[0][0]).toEqual(user)
  })

  it("destroy event", () => {
    wrapper.find("button.destroy").trigger("click")
    expect(wrapper.emitted("destroy").length).toBe(1)
  })

  it("test", async () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
