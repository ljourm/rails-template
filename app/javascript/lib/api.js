import axios from "axios"

let token = document.querySelector('meta[name="csrf-token"]')
if (token)
  axios.defaults.headers.common["X-CSRF-Token"] = token.getAttribute("content")

export default axios
