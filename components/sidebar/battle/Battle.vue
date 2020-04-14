<template lang="pug">
.battle
  .battle__controls
  .battle__secondary
    UIIconButton(name="Add")
    UIIconButton(name="Load")
    UIIconButton(name="Sort")
    UIIconButton(name="Save")
    UIIconButton(name="Cancel")
  .battle__secondary
    UIIconButton(name="Back")
    UIInput(
      placeholder="Find..."
      example="For example: «Wolf» or «CR=1/2»"
      v-model="searchText"
      :style="{ marginLeft: '24px', marginRight: '24px' }"
    )
    UIIconButton(name="Search" :style="{ marginLeft: '-2px', marginRight: '-2px' }")
  .battle__content
    MonsterList
    //- Entity(
    //-   v-for="(item, index) in entities"
    //-   :key="index"
    //-   :entity="item"
    //-   :mods="mods" 
    //- )
</template>

<script>
import Entity from './Entity'
import MonsterList from './MonsterList'
import UIInput from '~/components/ui/UIInput'
import UIIconButton from '~/components/ui/UIIconButton'

export default {
  components: { Entity, UIInput, MonsterList, UIIconButton },
  data() {
    return {
      searchText: null,
      entities: [this.$store.state.character],
      mods: [
        { name: 'Advantage', type: 'positive' },
        { name: 'Disadvantage', type: 'negative' },
      ],
    }
  },
}
</script>

<style lang="sass" scoped>
.battle
  &__controls
    height: 116px
    background-color: #1D1F20
  &__secondary
    display: flex
    align-items: center
    justify-content: space-between
    height: 48px
    padding-left: 24px
    padding-right: 24px
    background-color: #131515
    > *
      // margin-right: 12px
      &:last-child
        margin-right: 0
</style>
