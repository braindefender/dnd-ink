import Artwork from '~/assets/Races/Elf.jpg'

import Strength from '~/assets/Character/Stats/Strength.svg'
import Agility from '~/assets/Character/Stats/Agility.svg'
import Constitution from '~/assets/Character/Stats/Constitution.svg'
import Intelligence from '~/assets/Character/Stats/Intelligence.svg'
import Wisdom from '~/assets/Character/Stats/Wisdom.svg'
import Charisma from '~/assets/Character/Stats/Charisma.svg'

import HP from '~/assets/Character/HP.svg'
import AC from '~/assets/Character/AC.svg'
import Speed from '~/assets/Character/Speed.svg'
import Initiative from '~/assets/Character/Initiative.svg'

import Proficiency from '~/assets/Character/Proficiency.svg'
import PassivePerception from '~/assets/Character/PassivePerception.svg'
import PassiveWisdom from '~/assets/Character/PassiveWisdom.svg'
import PassiveInvestigation from '~/assets/Character/PassiveInvestigation.svg'

const state = () => ({
  name: 'Джонатан Виски',
  artwork: Artwork,
  stats: [
    {
      name: 'Strength',
      short: 'STR',
      icon: Strength,
      stat: 10,
      mod: 0,
      save: 10,
    },
    {
      name: 'Agility',
      short: 'AGI',
      icon: Agility,
      stat: 10,
      mod: 0,
      save: 10,
    },
    {
      name: 'Constitution',
      short: 'CON',
      icon: Constitution,
      stat: 10,
      mod: 0,
      save: 10,
    },
    {
      name: 'Intelligence',
      short: 'INT',
      icon: Intelligence,
      stat: 10,
      mod: 0,
      save: 10,
    },
    {
      name: 'Wisdom',
      short: 'WIS',
      icon: Wisdom,
      stat: 10,
      mod: 0,
      save: 10,
    },
    {
      name: 'Charisma',
      short: 'CHA',
      icon: Charisma,
      stat: 10,
      mod: 0,
      save: 10,
    },
  ],
  secondary: [
    {
      name: 'HP',
      total: '126',
      current: '94',
      icon: HP,
    },
    {
      name: 'AC',
      total: '14',
      icon: AC,
    },
    {
      name: 'Move Speed',
      total: '30',
      icon: Speed,
    },
    {
      name: 'Initiative',
      total: '+2',
      icon: Initiative,
    },
    {
      name: 'Proficiency',
      total: '+2',
      icon: Proficiency,
    },
    {
      name: 'Passive Perception',
      total: '15',
      icon: PassivePerception,
    },
    {
      name: 'Passive Wisdom',
      total: '13',
      icon: PassiveWisdom,
    },
    {
      name: 'Passive Investigation',
      total: '+2',
      icon: PassiveInvestigation,
    },
  ],
})

export default { state, namespaced: true }
