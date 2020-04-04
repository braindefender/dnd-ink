import d4 from '~/assets/Dice/d4.svg'
import d6 from '~/assets/Dice/d6.svg'
import d8 from '~/assets/Dice/d8.svg'
import d10 from '~/assets/Dice/d10.svg'
import d12 from '~/assets/Dice/d12.svg'
import d20 from '~/assets/Dice/d20.svg'

import Character from '~/assets/Tabs/Character.svg'
import Journal from '~/assets/Tabs/Journal.svg'
import Library from '~/assets/Tabs/Library.svg'
import Music from '~/assets/Tabs/Music.svg'
import Settings from '~/assets/Tabs/Settings.svg'

const state = () => ({
  dices: { d4, d6, d8, d10, d12, d20 },
  tabs: { Character, Journal, Library, Music, Settings }
})

export default { state, namespaced: true }
