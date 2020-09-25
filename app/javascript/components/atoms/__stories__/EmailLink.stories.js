import EmailLink from "../EmailLink"

export default {
  title: "Atoms/EmailLink",
  component: EmailLink,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { EmailLink },
  template: '<EmailLink v-bind="$props" />',
})

export const Main = Template.bind({})
Main.args = {
  email: "sample@example.com",
}
