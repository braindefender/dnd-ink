<template lang="pug">
.primary
  .primary__name {{ stat.short }}
  img.primary__icon(:src="stat.icon")
  .primary__value {{ stat[mode] }}
</template>

<script>
export default {
  props: {
    mode: { type: String, required: false, default: () => 'stat' },
    stat: { type: Object, required: true },
  },
}
</script>

<style lang="sass" scoped>
.primary
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  &__name
    font-size: 11px
    font-weight: bold
    letter-spacing: 1px
    margin-bottom: 4px
  &__icon
    width: 24px
    height: 24px
    margin-bottom: 8px
  &__value
    font-size: 20px
    letter-spacing: 1px
</style>
