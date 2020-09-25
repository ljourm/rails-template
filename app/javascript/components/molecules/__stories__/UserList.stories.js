import UserList from "../UserList"

export default {
  title: "Molecules/UserList",
  component: UserList,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UserList },
  template: '<UserList v-bind="$props" />',
})

export const SingleLine = Template.bind({})
SingleLine.args = {
  users: [
    { uuid: "uuid", email: "samle@example.com", name: "name", roles: [] },
  ],
}

export const MultiLine = Template.bind({})
MultiLine.args = {
  users: [
    { uuid: "uuid1", email: "samle1@example.com", name: "name1", roles: [] },
    { uuid: "uuid2", email: "samle2@example.com", name: "name2", roles: [] },
  ],
}

export const Empty = Template.bind({})
Empty.args = {
  users: [],
}
