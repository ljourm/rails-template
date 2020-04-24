import NotFound from "pages/NotFound"
import User from "pages/User"

const Foo = { template: "<div>foo</div>" }
const Bar = { template: "<div>bar</div>" }

export default [
  { path: "/users/:id", component: User },
  { path: "/foo/:id", component: Foo },
  { path: "/bar", component: Bar },
  { path: "*", component: NotFound },
]
