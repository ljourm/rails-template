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
        b-taginput(
          v-model="selectedRoles",
          :data="options"
          autocomplete,
          :allow-new="true"
          :open-on-focus="true"
          :readonly="true"
          field="name"
          icon="label",
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
      options: [],
    }
  },
  watch: {
    user: {
      immediate: true,
      handler(value) {
        this.form = JSON.parse(JSON.stringify(value))

        if (this.form.roles) {
          this.selectedRoles = this.form.roles.map((roleKey) => {
            return this.roles.find((role) => {
              return role.key === roleKey
            })
          })
        }
      },
    },
    selectedRoles: function () {
      this.form.roles = this.selectedRoles.map((role) => {
        return role.key
      })

      this.options = this.roles.filter((role) => {
        return !this.selectedRoles.find((selectedRole) => {
          return selectedRole.key === role.key
        })
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
  },
}
</script>

<style scoped lang="scss"></style>
