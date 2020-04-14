<template lang="pug">
img.icon-button(:src="$store.state.icons.ui[name]")
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
  },
}
</script>

<style lang="sass" scoped>
.icon-button
  cursor: pointer
  transition: all ease 0.15s
  opacity: 0.4
  &:hover
    opacity: 1
</style>
