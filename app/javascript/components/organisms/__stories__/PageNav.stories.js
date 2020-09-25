import PageNav from "../PageNav"

export default {
  title: "Organisms/PageNav",
  component: PageNav,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PageNav },
  template: '<PageNav v-bind="$props" />',
})

export const Main = Template.bind({})
Main.args = {}
