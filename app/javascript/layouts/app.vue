<template lang="pug">
section.section
  .container
    .columns
      .column
        PageNav
    .columns
      .column
        .box
          router-view
    .columns
      .column
        .box
          DebugPanel
</template>

<script>
import PageNav from "components/molecules/PageNav"
import DebugPanel from "components/organisms/DebugPanel"

export default {
  components: {
    PageNav,
    DebugPanel,
  },
}
</script>

<style scoped lang="scss"></style>
