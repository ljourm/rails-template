<template lang="pug">
div
  .loading loading: {{ loading }}
  .path path: {{ path }}
  .id id: {{ id }}
  .error-message error-message {{ errorMessage }}
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState("base", ["loading", "errorMessage"]),
    path: function () {
      return this.$route.path
    },
    id: function () {
      return this.$route.params.id
    },
  },
}
</script>

<style scoped lang="scss"></style>
