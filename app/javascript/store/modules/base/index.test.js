import store from "./index"

describe("store", () => {
  test("snapshot", () => {
    expect(store).toMatchSnapshot()
  })
})
