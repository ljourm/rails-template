import mutations from "../mutations"

describe("SET_LOADING", () => {
  it("normal", () => {
    const post = true
    const state = {
      loading: false,
    }

    mutations.SET_LOADING(state, post)
    expect(state).toEqual({ loading: post })
  })
})

describe("SET_ERROR_MESSAGE", () => {
  it("normal", () => {
    const post = "message"
    const state = {
      errorMessage: null,
    }

    mutations.SET_ERROR_MESSAGE(state, post)
    expect(state).toEqual({ errorMessage: post })
  })
})

describe("CLEAR_ERROR_MESSAGE", () => {
  it("normal", () => {
    const state = {
      errorMessage: null,
    }

    mutations.CLEAR_ERROR_MESSAGE(state)
    expect(state).toEqual({ errorMessage: null })
  })
})
