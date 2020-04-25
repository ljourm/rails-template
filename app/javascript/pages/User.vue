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
      vm.fetch({ id: to.params.id })
    })
  },
  beforeRouteUpdate(to, _from, next) {
    this.fetch({ id: to.params.id })
    next()
  },
  computed: {
    ...mapState("user", ["user"]),
  },
  methods: {
    ...mapActions("user", ["fetch", "submit", "destroy"]),
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
