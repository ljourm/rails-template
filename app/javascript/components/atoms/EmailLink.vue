<template lang="pug">
a(:href="href")
  span {{ email }}
  i.far.fa-address-book
</template>

<script>
// NOTE: scss、FontAwesomeのテストとして作成
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

<style scoped lang="scss">
$margin: 0.3em;

a span {
  margin-right: $margin;
}
</style>
