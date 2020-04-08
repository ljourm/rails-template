<template lang="pug">
.user-list
  h2 user-list
  span(v-for="user in users" :key="user.id")
    EmailLink(:email="user.email")
</template>

<script>
import { mapState } from "vuex"
import api from "lib/api"

import EmailLink from "components/atoms/EmailLink"

export default {
  components: {
    EmailLink,
  },
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
  color: $primary;
  font-size: 2em;
  text-align: center;
}

.users {
  display: flex;
  user-select: none;
}
</style>
