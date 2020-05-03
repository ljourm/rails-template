<template lang="pug">
.user-list
  h2 user-list
  table.table.is-striped.is-fullwidth
    tr(v-for="user in users" :key="user.id")
      td
        router-link(:to="`/users/${user.uuid}`") {{ user.name }}
      td
        EmailLink(:email="user.email")
      td
        div(v-for="role in user.roles") {{ role }}
</template>

<script>
import { mapState } from "vuex"
import EmailLink from "components/atoms/EmailLink"

export default {
  components: {
    EmailLink,
  },
  computed: {
    ...mapState("users", ["users"]),
  },
}
</script>

<style scoped lang="scss"></style>
