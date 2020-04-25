import router from "./"

describe("router", () => {
  test("snapshot", () => {
    expect(router).toMatchSnapshot()
  })
})
