import store from "../index"

const axios = require("axios")
jest.mock("axios")

const actions = store.actions

describe("actions", () => {
  let params
  let commit
  let dispatch

  beforeEach(() => {
    params = { id: 1 }
    commit = jest.fn()
    dispatch = jest.fn()
  })

  const sharedNormalExamples = async (executor, expectedResult) => {
    const mockResponse = { data: "response" }
    axios.mockImplementation(() => {
      return mockResponse
    })

    const result = await executor({ commit, dispatch }, params)

    expect(result).toEqual(expectedResult)
    expect(commit).toHaveBeenNthCalledWith(1, "base/SET_LOADING", true, {
      root: true,
    })
    expect(commit).toHaveBeenNthCalledWith(2, "base/SET_LOADING", false, {
      root: true,
    })
    expect(dispatch).not.toHaveBeenCalled()
  }

  describe("fetch", () => {
    it("normal", async () => {
      const executor = actions.fetch
      const response = "response"

      sharedNormalExamples(executor, response)
    })

    it("abnormal", async () => {
      const error = new Error("error")
      axios.mockImplementation(() => {
        throw error
      })

      const result = await actions.fetch({ commit, dispatch }, params)

      expect(result).toEqual(undefined)
      expect(commit).toHaveBeenNthCalledWith(1, "base/SET_LOADING", true, {
        root: true,
      })
      expect(commit).toHaveBeenNthCalledWith(2, "base/SET_LOADING", false, {
        root: true,
      })
      expect(dispatch).toHaveBeenCalled()
    })
  })

  describe("submit", () => {
    const executor = actions.submit
    const response = "response"

    it("patch", async () => {
      sharedNormalExamples(executor, response)
    })
    it("post", async () => {
      params = {}

      sharedNormalExamples(executor, response)
    })
  })
  describe("destroy", () => {
    it("normal", async () => {
      const executor = actions.destroy
      const response = "response"

      sharedNormalExamples(executor, response)
    })
  })
})
