<template lang="pug">
.main
  .field
  .sidebar
    .sidebar-tabs
      TabButton(
        v-for="(tab, index) in tabs"
        :name="tab.name"
        :active="index == $store.state.tabs.current"
        :index="index" 
        :key="index"
      )
    TabView(
      :tabs="tabs" 
      :current="current"
    )
    .sidebar-dices
      Dice(
        v-for="dice in dices"
        :dice="dice"
        :key="dice"
      )
</template>

<script>
import Dice from '~/components/Dice.vue'
import TabButton from '~/components/TabButton.vue'
import TabView from '~/components/TabView'

import Battle from '~/components/sidebar/battle/Battle'
import Character from '~/components/sidebar/character/Character'
import Journal from '~/components/sidebar/journal/Journal'
import Library from '~/components/sidebar/library/Library'
import Music from '~/components/sidebar/music/Music'
import Settings from '~/components/sidebar/settings/Settings'

export default {
  components: {
    Dice,
    TabButton,
    TabView,
  },
  data() {
    return {
      dices: ['d4', 'd6', 'd8', 'd10', 'd12', 'd20'],
      tabs: [
        { name: 'Journal', component: Journal },
        { name: 'Battle', component: Battle },
        { name: 'Character', component: Character },
        { name: 'Library', component: Library },
        { name: 'Music', component: Music },
        { name: 'Settings', component: Settings },
      ],
    }
  },
  computed: {
    current() {
      return this.$store.state.tabs.current
    },
  },
  mounted() {
    this.$store.commit.sync({
      type: 'logux/subscribe',
      channel: 'tabs',
    })
  },
  beforeDestroy() {
    this.$store.commit.sync({
      type: 'logux/unsubscribe',
      channel: 'tabs',
    })
  },
}
</script>

<style lang="sass" scoped>
.main
  display: flex
  height: 100vh

.field
  flex-grow: 1

.sidebar
  display: flex
  flex-direction: column
  justify-content: space-between
  width: 480px
  background-color: #0b0d0e

.sidebar-tabs
  background-color: #171a1c
  height: 72px
  display: flex
  align-items: center
  justify-content: space-between
  padding: 0 24px

.sidebar-dices
  background-color: #171a1c
  height: 96px
  display: flex
  align-items: center
  justify-content: center
</style>
