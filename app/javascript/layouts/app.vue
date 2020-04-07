<template lang="pug">
section.section
  .container
    .columns.column
      header
        h1.title Vue Sample Page
  .container
    .columns
      .column
        h2 menu
        ul
          li
            a(@click="logout") logout
          li
            router-link(to="/") Go to /
          li
            router-link(to="/foo/1") Go to /foo/1
          li
            router-link(to="/bar") Go to /bar
    .columns
      .column
        .box
          .path path: {{ path }}
          .foo-id foo-id: {{ fooId }}
          router-view
  .container
    .columns
      .column
        UserList
    .columns
      .column
        BuefySample
</template>

<script>
import { mapActions } from "vuex"
import UserList from "components/molecules/UserList"
import BuefySample from "components/molecules/BuefySample"

export default {
  components: {
    UserList,
    BuefySample,
  },
  computed: {
    path: function () {
      return this.$route.path
    },
    fooId: function () {
      return this.$route.params.id
    },
  },
  methods: {
    ...mapActions("base", ["logout"]),
  },
}
</script>

<style scoped lang="scss"></style>
