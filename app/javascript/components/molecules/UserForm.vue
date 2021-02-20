<template lang="pug">
  form(@submit.prevent="submit")
    .field
      label.label 氏名
      .control
        input.input(v-model="form.name", type="text", name="name", aria-label="name")
    .field
      label.label EMail
      .control
        input.input(v-model="form.email", type="text", name="email", aria-label="email")
    .field
      label.label パスワード
      .control
        input.input(v-model="form.password", type="password", name="password", aria-label="password")
    .field
      label.label パスワード確認
      .control
        input.input(
          v-model="form.password_confirmation",
          type="password",
          name="password_confirmation",
          aria-label="password_confirmation"
        )
    .field
      label.label ロール
      .control
        b-taginput.roles(
          v-model="selectedRoles"
          autocomplete
          :data="unselectedRoles"
          :allow-new="true"
          :open-on-focus="true"
          :readonly="true"
          field="name"
          icon="label"
        )
    .field.is-grouped
      .control
        button.button.is-primary.submit(type="submit") 送信
      .control
        button.button.destroy(@click.prevent="destroy") 削除
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    roles: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      form: {},
      selectedRoles: [],
      unselectedRoles: [],
    }
  },
  watch: {
    user: {
      immediate: true,
      handler(value) {
        this.form = JSON.parse(JSON.stringify(value))

        this.updateSelectedRoles()
      },
    },
    roles: {
      immediate: true,
      handler() {
        this.updateSelectedRoles()
      },
    },
    selectedRoles: function () {
      this.updateUnselectedRoles()

      this.form.roles = this.selectedRoles.map((selectedRole) => {
        return selectedRole.key
      })
    },
  },
  methods: {
    submit: function () {
      this.$emit("submit", this.form)
    },
    destroy: function () {
      this.$emit("destroy")
    },
    updateSelectedRoles: function () {
      if (!("roles" in this.user) || !this.roles.length) {
        this.selectedRoles = []
        return
      }

      this.selectedRoles = this.roles.filter((role) => {
        return this.user.roles.some((userRoleKey) => {
          return role.key === userRoleKey
        })
      })
    },
    updateUnselectedRoles: function () {
      this.unselectedRoles = this.roles.filter((role) => {
        return !this.selectedRoles.some((selectedRole) => {
          return selectedRole === role
        })
      })
    },
  },
}
</script>

<style scoped lang="scss"></style>
