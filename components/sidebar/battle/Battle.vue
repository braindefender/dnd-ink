<template lang="pug">
.battle
  Entity(
    v-for="(item, index) in entities"
    :key="index"
    :entity="item"
    :mods="mods" 
  )
</template>

<script>
import Entity from './Entity'

export default {
  components: { Entity },
  data() {
    return {
      entities: [this.$store.state.character],
      mods: [
        { name: 'Advantage', type: 'positive' },
        { name: 'Curse', type: 'negative' },
      ],
    }
  },
}
</script>

<style lang="sass" scoped>
.battle
  padding: 24px
</style>
