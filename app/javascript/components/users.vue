<template>
  <div id="app">
    <p>{{ message }}</p>
    <div>
      <div v-for="user in users" :key="user.id">
        {{ user.email }}
      </div>
    </div>
  </div>
</template>

<script>
import api from "api"

export default {
  data: function () {
    return {
      message: "Hello Vue!",
      users: [],
    }
  },
  mounted: async function () {
    try {
      const res = await api.get("/admin/users")
      this.users = res.data.users
    } catch (error) {
      // エラー処理
    } finally {
      // 最終処理
    }
  },
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
