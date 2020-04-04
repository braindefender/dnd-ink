<template lang="pug">
.secondary
  img.secondary__icon(:src="icon")
  .secondary__text-small(v-if="current")
    .secondary__current {{ current }}
    .secondary__total {{ total }}
  .secondary__text(v-else) {{ total }}
</template>

<script>
export default {
  props: {
    icon: { type: String, required: true },
    total: { type: String, required: true },
    current: { type: String, required: false, default: () => null },
  },
}
</script>

<style lang="sass" scoped>
.secondary
  display: flex
  align-items: center
  justify-content: center
  font-family: "Exo 2"
  &__icon
    width: 24px
    height: 24px
    margin-right: 8px
  &__text
    font-size: 14px
    letter-spacing: 1px
  &__text-small
    display: flex
    flex-direction: column
    justify-content: center
    font-size: 11px
    letter-spacing: 0.5px
    font-weight: bold
  &__total
    opacity: 0.4
</style>
