<template lang="pug">
  UserList(:users="users")
</template>

<script>
import { mapState, mapActions } from "vuex"

import UserList from "components/molecules/lists/UserList"

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
