<template lang="pug">
.secondary
  img.secondary__icon(:src="stat.icon" :style="{ opacity: brightness }")
  .secondary__text-small(v-if="stat.current")
    .secondary__current {{ stat.current }}
    .secondary__total {{ stat.total }}
  .secondary__text(v-else) {{ stat.total }}
</template>

<script>
export default {
  props: {
    stat: { type: Object, required: true },
    brightness: { type: String, required: false, default: () => '1.0' },
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
    opacity: 0.8
  &__text-small
    display: flex
    flex-direction: column
    justify-content: center
    font-size: 11px
    letter-spacing: 0.5px
    font-weight: bold
  &__total
    opacity: 0.4
  &__current
    opacity: 0.8
</style>
