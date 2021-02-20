import store from "../index"

const mutations = store.mutations
const actions = store.actions

describe("store", () => {
  test("snapshot", () => {
    expect(store).toMatchSnapshot()
  })
})

describe("mutations", () => {
  describe("SET_ROLES", () => {
    it("normal", () => {
      const post = [{ name: "test" }]
      const state = {
        roles: {},
      }

      mutations.SET_ROLES(state, post)
      expect(state).toEqual({ roles: post })
    })
  })
})

describe("actions", () => {
  describe("fetch", () => {
    it("APIのレスポンスに複数のロールがある時", async () => {
      const roles = [
        { key: "role_management", name: "ロール管理" },
        { key: "user_management", name: "ユーザー管理" },
      ]
      const data = {
        roles: roles,
      }

      const commit = jest.fn()
      const dispatch = jest.fn().mockReturnValueOnce(data)

      await actions.fetch({ commit, dispatch })

      expect(commit).toHaveBeenCalledWith("SET_ROLES", roles)
      expect(dispatch).toHaveBeenCalledWith(
        "api/fetch",
        { url: "/api/v1/roles" },
        { root: true }
      )
    })

    it("APIのレスポンスが不正な時", async () => {
      const data = null

      const commit = jest.fn()
      const dispatch = jest.fn().mockReturnValueOnce(data)

      await actions.fetch({ commit, dispatch })

      expect(commit).toHaveBeenCalledWith("SET_ROLES", [])
    })
  })
})
