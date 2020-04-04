<template lang="pug">
  .character
    PrimaryStats
    SecondaryStats
</template>

<script>
import PrimaryStats from './PrimaryStats'
import SecondaryStats from './SecondaryStats'

export default {
  components: { PrimaryStats, SecondaryStats },
}
</script>

<style lang="sass" scoped>
.character
  color: white
</style>
