<template lang="pug">
a(:href="href") {{ email }}
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      required: true,
    },
  },
  computed: {
    href: function () {
      return `mailto:${this.email}`
    },
  },
}
</script>

<style scoped lang="scss"></style>
