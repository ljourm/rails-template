import { shallowMount } from "@vue/test-utils"
import Component from "./"

import axios from "axios"
jest.mock("axios")

const email = "test@example.com"
const res = { data: { users: [{ id: 1, email: email }] } }
axios.get.mockResolvedValue(res)

describe("Component", () => {
  const wrapper = shallowMount(Component)

  test("snapshot", () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  test("emailが表示されること", () => {
    expect(wrapper.find(`emaillink-stub[email="${email}"]`).exists()).toBe(true)
  })
})
