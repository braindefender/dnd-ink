<template lang="pug">
.stats
  .stats__items
    PrimaryStat(
      v-for="(stat, index) in stats"
      :stat="stat"
      :mode="mode"
      :key="index"
    )
  .stats__switch
    .stats__switch-item(
      v-for="(item, index) in modeList"
      :key="index"
      :class="{'stats__switch-item--active': item === mode}"
      @click="setMode(item)"
    ) {{ item }}
</template>

<script>
import PrimaryStat from './PrimaryStat'

export default {
  components: { PrimaryStat },
  data() {
    return {
      modeList: ['mod', 'stat', 'save'],
      mode: 'mod',
      stats: this.$store.state.character.stats,
    }
  },
  methods: {
    setMode(mode) {
      this.mode = mode
    },
  },
}
</script>

<style lang="sass" scoped>
.stats
  display: flex
  padding: 24px
  font-family: "Exo 2"
  background-color: #22262A
  &__items
    display: flex
    margin-right: 32px
    > div
      margin-right: 24px
      &:last-child
        margin-right: 0
  &__switch
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-between
    padding-bottom: 2px
    margin-top: -4px
    margin-bottom: -4px
  &__switch-item
    text-transform: uppercase
    font-size: 11px
    font-weight: bold
    letter-spacing: 1px
    opacity: 0.4
    cursor: pointer
    transition: all ease 0.15s
    padding: 4px 0
    &:hover
      opacity: 0.8
  &__switch-item--active
    opacity: 1
</style>
