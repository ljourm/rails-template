import NotFound from "pages/NotFound"

import Home from "pages/Home"

import User from "pages/User"
import Users from "pages/Users"

export default [
  { path: "/", component: Home },
  { path: "/users/:id", component: User },
  { path: "/users", component: Users },
  { path: "*", component: NotFound },
]
