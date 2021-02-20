import { createLocalVue, mount } from "@vue/test-utils"
import Buefy from "buefy"
import Component from "../UserForm"

const email = "test@example.com"
const user = {
  uuid: "uuid",
  email: email,
  name: "name",
  roles: ["role_management"],
}
const roles = [
  { key: "role_management", name: "ロール管理" },
  { key: "user_management", name: "ユーザー管理" },
]

describe("Component", () => {
  const createWrapper = (user, roles) => {
    const localVue = createLocalVue()
    localVue.use(Buefy)

    return mount(Component, {
      localVue,
      propsData: { user, roles },
    })
  }

  it("test", async () => {
    const wrapper = createWrapper(user, roles)

    expect(wrapper.element).toMatchSnapshot()
  })

  describe("event", () => {
    const wrapper = createWrapper(user, roles)

    it("submit event", () => {
      wrapper.find("form").trigger("submit")
      expect(wrapper.emitted("submit")[0][0]).toEqual(user)
    })

    it("destroy event", () => {
      wrapper.find("button.destroy").trigger("click")
      expect(wrapper.emitted("destroy").length).toBe(1)
    })
  })

  describe("when empty user", () => {
    const wrapper = createWrapper({}, roles)

    it("should not be error", () => {
      expect(wrapper.vm.selectedRoles.length).toBe(0)
      expect(wrapper.vm.unselectedRoles.length).toBe(0)
    })
  })

  describe("when empty roles", () => {
    const wrapper = createWrapper(user, [])

    it("should not be error", () => {
      expect(wrapper.vm.selectedRoles.length).toBe(0)
      expect(wrapper.vm.unselectedRoles.length).toBe(0)
    })
  })

  describe("role chain", () => {
    const wrapper = createWrapper(user, roles)

    it("initial status", () => {
      const tagText = wrapper.find(".roles span.tag").text()
      expect(tagText).toBe("ロール管理")
      expect(tagText).not.toBe("ユーザー管理")

      expect(wrapper.vm.selectedRoles.length).toBe(1)
      expect(wrapper.vm.selectedRoles[0].key).toBe("role_management")
    })

    it("changed status and submit event", () => {
      wrapper.setData({ selectedRoles: [roles[1]] })

      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.selectedRoles.length).toBe(1)
        expect(wrapper.vm.selectedRoles[0].key).toBe("user_management")

        expect(wrapper.vm.unselectedRoles.length).toBe(1)
        expect(wrapper.vm.unselectedRoles[0].key).toBe("role_management")

        wrapper.find("form").trigger("submit")
        expect(wrapper.emitted("submit")[0][0].roles).toEqual([
          "user_management",
        ])
      })
    })
  })
})
