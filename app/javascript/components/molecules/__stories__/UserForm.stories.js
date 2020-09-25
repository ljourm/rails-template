import UserForm from "../UserForm"

export default {
  title: "Molecules/UserForm",
  component: UserForm,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UserForm },
  template: '<UserForm v-bind="$props" />',
})

const user = {
  uuid: "uuid",
  email: "samle@example.com",
  name: "name",
  roles: [],
}

export const Main = Template.bind({})
Main.args = {
  user: user,
}

export const Empty = Template.bind({})
Empty.args = {
  user: {},
}
