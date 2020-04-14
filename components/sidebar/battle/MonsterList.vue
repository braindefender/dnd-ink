<template lang="pug">
.monster-list
  .monster-list__group(
    v-for="group in monsterList"
  )
    .monster-list__heading
      .monster-list__title {{ group.title }}&nbsp;
      .monster-list__subtitle {{ group.subtitle }}
    .monster-list__list
      MonsterItem(
        v-for="(monster, index) in group.list"
        :key="index"
        :artwork="monster.artwork"
        :name="monster.name"
      )
</template>

<script>
import MonsterItem from './MonsterItem'

import Wolf from '~/assets/Monsters/Wolf.jpeg'

export default {
  components: { MonsterItem },
  data() {
    return {
      monsterList: [
        {
          title: 'CR 1/4',
          subtitle: '(50 XP)',
          list: [
            { name: 'Giant Wolf Spider', cr: '1/4', xp: 50, artwork: Wolf },
            { name: 'Wolf', cr: '1/4', xp: 50, artwork: Wolf },
          ],
        },
        {
          title: 'CR 1',
          subtitle: '(200 XP)',
          list: [{ name: 'Dire Wolf', cr: '1', xp: 200, artwork: Wolf }],
        },
      ],
    }
  },
}
</script>

<style lang="sass" scoped>
.monster-list
  display: flex
  font-family: "Exo 2"
  flex-direction: column
  padding-left: 24px
  padding-right: 24px
  &__list
    display: flex
    flex-direction: column
    > div
      margin-bottom: 8px
      margin-left: -8px
      margin-right: -8px
      &:last-child
        margin-bottom: 0
  &__heading
    display: flex
    align-items: center
    font-size: 14px
    padding-bottom: 9px
    padding-top: 8px
  &__title
    color: rgba(white, 0.8)
  &__subtitle
    color: rgba(white, 0.4)
</style>
