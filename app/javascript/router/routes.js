import NotFound from "pages/NotFound"

const Foo = { template: "<div>foo</div>" }
const Bar = { template: "<div>bar</div>" }

export default [
  { path: "/foo/:id", component: Foo },
  { path: "/bar", component: Bar },
  { path: "*", component: NotFound },
]
