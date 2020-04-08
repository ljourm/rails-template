import store from "./"

const actions = store.actions

describe("setErrorMessage", () => {
  test("エラーメッセージのレスポンスあり", async () => {
    const message = "エラーメッセージ"
    const error = { response: { message: message } }

    const commit = jest.fn()
    actions.setErrorMessage({ commit }, error)

    expect(commit).toHaveBeenCalledWith("SET_ERROR_MESSAGE", message)
  })

  test("認証エラー", async () => {
    const error = { response: { status: 401 } }

    const dispatch = jest.fn()
    actions.setErrorMessage({ dispatch }, error)

    expect(dispatch).toHaveBeenCalledWith("redirectToLogin")
  })

  test("通信エラー", async () => {
    const error = { request: {} }

    const commit = jest.fn()
    actions.setErrorMessage({ commit }, error)

    expect(commit).toHaveBeenCalledWith(
      "SET_ERROR_MESSAGE",
      "通信エラーが発生しました。ネットワーク環境を確認し、再度実行してください。このメッセージが繰り返し表示される場合は管理者までお問い合わせください。"
    )
  })

  test("エラー原因が特定不能", async () => {
    const error = null

    const commit = jest.fn()
    actions.setErrorMessage({ commit }, error)

    expect(commit).toHaveBeenCalledWith(
      "SET_ERROR_MESSAGE",
      "エラーが発生しました。管理者にお問い合わせください。"
    )
  })
})
