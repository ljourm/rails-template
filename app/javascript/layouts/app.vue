<template lang="pug">
  #app
    h2 vue-router test
    #links
      router-link(to="/foo/1") Go to Foo
      router-link(to="/bar") Go to Bar
    #page
      router-view
      .foo-id foo-id: {{ fooId }}
    h2 sample
    #sample
      users
</template>

<script>
import users from "components/users"

export default {
  components: {
    users,
  },
  computed: {
    fooId: function () {
      return this.$route.params.id
    },
  },
}
</script>

<style scoped lang="scss"></style>
