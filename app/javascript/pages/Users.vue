<template lang="pug">
div
  .columns
    .column
      UserList(:users="users")
  .columns
    .column
      router-link.button.is-link(to='/users/new') New
</template>

<script>
import { mapState, mapActions } from "vuex"

import UserList from "components/lists/UserList"

export default {
  components: {
    UserList,
  },
  beforeRouteEnter: function (_to, _from, next) {
    next((vm) => {
      vm.fetch()
    })
  },
  computed: {
    ...mapState("users", ["users"]),
  },
  methods: {
    ...mapActions("users", ["fetch"]),
  },
}
</script>

<style scoped lang="scss"></style>
