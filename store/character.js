import Strength from '~/assets/Character/Stats/Strength.svg'
import Agility from '~/assets/Character/Stats/Agility.svg'
import Constitution from '~/assets/Character/Stats/Constitution.svg'
import Intelligence from '~/assets/Character/Stats/Intelligence.svg'
import Wisdom from '~/assets/Character/Stats/Wisdom.svg'
import Charisma from '~/assets/Character/Stats/Charisma.svg'

const state = () => ({
  stats: [
    {
      name: 'Strength',
      short: 'STR',
      icon: Strength,
      stat: 10,
      mod: 0,
      save: 10
    },
    {
      name: 'Agility',
      short: 'AGI',
      icon: Agility,
      stat: 10,
      mod: 0,
      save: 10
    },
    {
      name: 'Constitution',
      short: 'CON',
      icon: Constitution,
      stat: 10,
      mod: 0,
      save: 10
    },
    {
      name: 'Intelligence',
      short: 'INT',
      icon: Intelligence,
      stat: 10,
      mod: 0,
      save: 10
    },
    {
      name: 'Wisdom',
      short: 'WIS',
      icon: Wisdom,
      stat: 10,
      mod: 0,
      save: 10
    },
    {
      name: 'Charisma',
      short: 'CHA',
      icon: Charisma,
      stat: 10,
      mod: 0,
      save: 10
    }
  ]
})

export default { state, namespaced: true }
