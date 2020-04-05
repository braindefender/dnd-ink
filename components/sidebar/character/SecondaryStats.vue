<template lang="pug">
.secondary-stats
  SecondaryStat(
    v-for="(stat, index) in secondary"
    :key="index"
    :stat="stat"
  )
</template>

<script>
import SecondaryStat from './SecondaryStat'

export default {
  components: { SecondaryStat },
  data() {
    return {
      secondary: this.$store.state.character.secondary.slice(0, 4),
    }
  },
}
</script>

<style lang="sass" scoped>
.secondary-stats
  padding: 12px 24px
  display: flex
  justify-content: space-between
  background-color: #171A1C
</style>
