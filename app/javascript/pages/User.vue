<template lang="pug">
  UserForm(:user="user" @submit="submitForm" @destroy="destroyData")
</template>

<script>
import { mapState, mapActions } from "vuex"

import UserForm from "components/molecules/forms/UserForm"

export default {
  components: {
    UserForm,
  },
  beforeRouteEnter: function (to, _from, next) {
    next((vm) => {
      vm.fetchForm(to.params.id)
    })
  },
  beforeRouteUpdate(to, _from, next) {
    this.fetchForm(to.params.id)
    next()
  },
  computed: {
    ...mapState("user", ["user"]),
  },
  methods: {
    ...mapActions("user", ["fetch", "submit", "destroy", "clear"]),
    fetchForm: function (id) {
      if (id === "new") this.clear()
      else this.fetch({ id: id })
    },
    submitForm: function (form) {
      this.submit({ form: form })
    },
    destroyData: async function () {
      await this.destroy({ id: this.user.uuid })
      this.$router.push("/users")
    },
  },
}
</script>

<style scoped lang="scss"></style>
