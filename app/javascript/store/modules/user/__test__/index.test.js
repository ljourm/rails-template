import store from "../index"

const mutations = store.mutations
const actions = store.actions

describe("store", () => {
  test("snapshot", () => {
    expect(store).toMatchSnapshot()
  })
})

describe("mutations", () => {
  describe("SET_USER", () => {
    it("normal", () => {
      const post = { name: "test" }
      const state = {
        user: {},
      }

      mutations.SET_USER(state, post)
      expect(state).toEqual({ user: post })
    })
  })
})

describe("actions", () => {
  describe("fetch", () => {
    it("APIのレスポンスがある時", async () => {
      const user = { uuid: 1, name: "test" }
      const data = {
        user: user,
      }

      const commit = jest.fn()
      const dispatch = jest.fn().mockReturnValueOnce(data)

      await actions.fetch({ commit, dispatch }, { id: user.uuid })

      expect(commit).toHaveBeenCalledWith("SET_USER", user)
      expect(dispatch).toHaveBeenCalledWith(
        "api/fetch",
        { id: user.uuid, url: "/api/v1/users" },
        { root: true }
      )
    })

    it("APIのレスポンスがない時", async () => {
      const data = null

      const commit = jest.fn()
      const dispatch = jest.fn().mockReturnValueOnce(data)

      await actions.fetch({ commit, dispatch }, { id: null })

      expect(commit).toHaveBeenCalledWith("SET_USER", {})
    })
  })

  describe("submit", () => {
    it("APIのレスポンスがある時", async () => {
      const user = { uuid: 1, name: "test" }
      const data = {
        user: user,
      }

      const commit = jest.fn()
      const dispatch = jest.fn().mockReturnValueOnce(data)

      await actions.submit({ commit, dispatch }, { form: user })

      expect(commit).toHaveBeenCalledWith("SET_USER", user)
      expect(dispatch).toHaveBeenCalledWith(
        "api/submit",
        { url: "/api/v1/users", id: user.uuid, data: data },
        { root: true }
      )
    })

    it("APIのレスポンスがない時", async () => {
      const user = { uuid: 1, name: "test" }

      const commit = jest.fn()
      const dispatch = jest.fn().mockReturnValueOnce(null)

      await actions.submit({ commit, dispatch }, { form: user })

      expect(commit).not.toHaveBeenCalledWith("SET_USER")
    })
  })

  describe("destroy", () => {
    it("APIのレスポンスがある時", async () => {
      const user = { uuid: 1, name: "test" }
      const data = {
        user: user,
      }

      const commit = jest.fn()
      const dispatch = jest.fn().mockReturnValueOnce(data)

      await actions.destroy({ commit, dispatch }, { id: user.uuid })

      expect(commit).toHaveBeenCalledWith("SET_USER", {})
      expect(dispatch).toHaveBeenCalledWith(
        "api/destroy",
        { id: user.uuid, url: "/api/v1/users" },
        { root: true }
      )
    })
  })

  describe("clear", () => {
    it("normal", async () => {
      const commit = jest.fn()
      actions.clear({ commit })

      expect(commit).toHaveBeenCalledWith("SET_USER", {})
    })
  })
})
