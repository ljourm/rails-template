<template lang="pug">
nav.navbar(role='navigation', aria-label='main navigation')
  .navbar-brand
    router-link(to='/')
      h1.title Rails Template
  .navbar-menu
    .navbar-start
      router-link.navbar-item(to="/users") Users
    .navbar-end
      .navbar-item
        .buttons
          .navbar-item
            b-button.is-light(@click="logout") Logout
</template>

<script>
import { mapActions } from "vuex"

export default {
  methods: {
    ...mapActions("base", ["logout"]),
  },
}
</script>

<style scoped lang="scss"></style>
