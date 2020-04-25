import store from "./index"

const mutations = store.mutations
const actions = store.actions

describe("store", () => {
  test("snapshot", () => {
    expect(store).toMatchSnapshot()
  })
})

describe("mutations", () => {
  describe("SET_USERS", () => {
    it("normal", () => {
      const post = [{ name: "test" }]
      const state = {
        users: {},
      }

      mutations.SET_USERS(state, post)
      expect(state).toEqual({ users: post })
    })
  })
})

describe("actions", () => {
  describe("fetch", () => {
    it("APIのレスポンスにユーザが一つある時", async () => {
      const users = [{ name: "test" }]
      const data = {
        users: users,
      }

      const commit = jest.fn()
      const dispatch = jest.fn().mockReturnValueOnce(data)

      await actions.fetch({ commit, dispatch })

      expect(commit).toHaveBeenCalledWith("SET_USERS", users)
      expect(dispatch).toHaveBeenCalledWith(
        "api/fetch",
        { url: "/api/v1/users" },
        { root: true }
      )
    })

    it("APIのレスポンスが不正な時", async () => {
      const data = null

      const commit = jest.fn()
      const dispatch = jest.fn().mockReturnValueOnce(data)

      await actions.fetch({ commit, dispatch })

      expect(commit).toHaveBeenCalledWith("SET_USERS", [])
    })
  })
})
