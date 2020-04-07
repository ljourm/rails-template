<template lang="pug">
.buefy-sample
  p {{ message }}
  b-field(label="Label")
    b-input(value="input value")
  b-button.is-primary(:loading="loading") button
  span.icon.has-text-info
    i.far.fa-address-book
    i.fas.fa-info-circle
</template>

<script>
import { mapState } from "vuex"

export default {
  data: function () {
    return {
      message: "Buefy Sample",
    }
  },
  computed: {
    ...mapState("base", ["loading"]),
  },
}
</script>

<style scoped lang="scss">
$primary: #aaa;

p {
  color: $primary;
  font-size: 2em;
  text-align: center;
}
</style>
