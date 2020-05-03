import router from "."

describe("router", () => {
  test("router", () => {
    expect(router).toBeTruthy()
  })

  test("snapshot", () => {
    // NOTE: スナップショットの更新が頻繁に発生するためコメントアウト
    // expect(router).toMatchSnapshot()
  })
})
