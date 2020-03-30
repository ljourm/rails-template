<template lang="pug">
  #app
    p {{ message }}
    .users
      span(v-for="user in users" :key="user.id") {{ user.email }}
    b-field(label="Name")
      b-input(value="Kevin Garvey")
    b-button.is-primary(:loading="loading") button
    span.icon.has-text-info
      i.far.fa-address-book
      i.fas.fa-info-circle
</template>

<script>
import { mapState } from "vuex"
import api from "api"

export default {
  data: function () {
    return {
      message: "Hello Vue!",
      users: [],
    }
  },
  computed: {
    ...mapState("base", ["loading"]),
  },
  mounted: async function () {
    try {
      const res = await api.get("/api/v1/users")
      this.users = res.data.users
    } catch (error) {
      // エラー処理
    } finally {
      // 最終処理
    }
  },
}
</script>

<style scoped lang="scss">
$primary: #aaa;

p {
  font-size: 2em;
  text-align: center;
  color: $primary;
}

.users {
  display: flex;
  user-select: none;
}
</style>
