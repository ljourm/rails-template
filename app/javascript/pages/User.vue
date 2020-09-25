<template lang="pug">
UserForm(:user="user" @submit="submitForm" @destroy="destroyData")
</template>

<script>
import { mapState, mapActions } from "vuex"

import UserForm from "components/molecules/UserForm"

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
    submitForm: async function (form) {
      await this.submit({ form: form })
      this.$buefy.toast.open({
        message: "Success",
        type: "is-success",
        position: "is-bottom",
      })
    },
    destroyData: async function () {
      await this.destroy({ id: this.user.uuid })
      this.$buefy.toast.open({
        message: "Success",
        type: "is-success",
        position: "is-bottom",
      })
      this.$router.push("/users")
    },
  },
}
</script>

<style scoped lang="scss"></style>
