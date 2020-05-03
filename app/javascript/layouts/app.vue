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
            router-link(to="/users") Go to /users
          li
            router-link(to="/foo/1") Go to /foo/1
          li
            router-link(to="/bar") Go to /bar
    .columns
      .column
        .box
          .loading loading: {{ loading }}
          .path path: {{ path }}
          .id id: {{ id }}
          .error-message error-message {{ errorMessage }}
          hr
          router-view
  .container
    .columns
      .column
        BuefySample
</template>

<script>
import { mapState, mapActions } from "vuex"
import BuefySample from "components/molecules/BuefySample"

export default {
  components: {
    BuefySample,
  },
  computed: {
    ...mapState("base", ["loading", "errorMessage"]),
    path: function () {
      return this.$route.path
    },
    id: function () {
      return this.$route.params.id
    },
  },
  methods: {
    ...mapActions("base", ["logout"]),
  },
}
</script>

<style scoped lang="scss"></style>
