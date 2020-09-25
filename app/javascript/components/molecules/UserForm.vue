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
  },
  data() {
    return {
      form: {},
    }
  },
  watch: {
    user: {
      immediate: true,
      handler(value) {
        this.form = JSON.parse(JSON.stringify(value))
      },
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
