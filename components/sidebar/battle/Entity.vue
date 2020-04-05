<template lang="pug">
.entity
  .entity__main
    img.entity__artwork(:src="entity.artwork")
    .entity__name {{ entity.name }}
    .entity__stats
      SecondaryStat(
        v-for="(stat, index) in entity.secondary.slice(0,4)"
        :key="index"
        :stat="stat" 
        brightness="0.25"
      )
  .entity__mods(v-if="mods")
    .entity__mod(
      v-for="mod in mods"
    ) 
      .entity__mod-indicator(:class="`entity__mod-indicator--${mod.type}`")
      .entity__mod-text {{ mod.name }}
</template>

<script>
import SecondaryStat from '~/components/sidebar/character/SecondaryStat'

export default {
  components: { SecondaryStat },
  props: {
    entity: { type: Object, required: true },
    mods: { type: Array, required: false, default: () => null },
  },
}
</script>

<style lang="sass" scoped>
.entity
  display: flex
  flex-direction: column
  font-family: "Exo 2"
  color: white
  border-radius: 8px
  background-color: rgba(white, 0.05)
  &__main
    display: flex
    align-items: center
    padding: 12px
  &__artwork
    flex: 0 0 auto
    width: 40px
    height: 40px
    border-radius: 50%
    box-shadow: 0 0 0 2px #666
  &__name
    font-weight: 500
    font-size: 14px
    flex-grow: 1
    padding: 0 12px
  &__stats
    display: flex
    align-items: center
    > div
      margin-right: 14px
      &:last-child
        margin-right: 0
  &__mods
    display: flex
    align-items: center
    padding: 0 12px
    padding-bottom: 9px
    margin-top: -3px
  &__mod
    display: flex
    align-items: center
    cursor: pointer
    margin-right: 12px
    &:last-child
      margin-right: 0
  &__mod-text
    font-size: 11px
    letter-spacing: 0.5px
    margin-top: -1px
  &__mod-indicator
    width: 8px
    height: 8px
    border-radius: 50%
    margin-right: 4px
    margin-top: 1px
    &--positive
      background-color: #6FCF97
    &--negative
      background-color: #EB5757
</style>
