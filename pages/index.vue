<template lang="pug">
.main
  .field
    Layers
    .block
      //- Token(:entity="entity")
    .dices-dock
      Dice(
        v-for="dice in dices"
        :dice="dice"
        :key="dice"
      )
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
</template>

<script>
import Dice from '~/components/Dice.vue'
import TabButton from '~/components/TabButton.vue'
import TabView from '~/components/TabView'
import Token from '~/components/field/Token'
import Layers from '~/components/field/Layers'

import Battle from '~/components/sidebar/battle/Battle'
import Character from '~/components/sidebar/character/Character'
import Journal from '~/components/sidebar/journal/Journal'
import Library from '~/components/sidebar/library/Library'
import Music from '~/components/sidebar/music/Music'
import Settings from '~/components/sidebar/settings/Settings'

import Image from '~/assets/Character/Artwork.png'

export default {
  components: {
    Dice,
    TabButton,
    TabView,
    Token,
    Layers,
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
      entity: {
        health: { current: 16, total: 22 },
        armor: { current: 14, total: 14 },
        artwork: Image,
      },
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
  background-color: #131515
  position: relative

.block
  width: 64px
  height: 64px
  padding: 24px

.sidebar
  display: flex
  flex-direction: column
  justify-content: space-between
  width: 432px
  background-color: #0b0d0e

.sidebar-tabs
  background-color: #171a1c
  height: 72px
  display: flex
  align-items: center
  justify-content: space-between
  padding: 0 24px

.dices-dock
  display: flex
  align-items: center
  justify-content: center
  position: absolute
  left: 50%
  bottom: 12px
  margin-left: -240px
  width: 480px
  height: 96px
  border-radius: 16px
  background-color: #171a1c
</style>
