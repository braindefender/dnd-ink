<template lang="pug">
.secondary-stats
  SecondaryStat(
    v-for="(stat, index) in secondary"
    :key="index"
    :icon="stat.icon"
    :total="stat.total"
    :current="stat.current",
  )
</template>

<script>
import SecondaryStat from './SecondaryStat'

import HP from '~/assets/Character/HP.svg'
import AC from '~/assets/Character/AC.svg'
import Speed from '~/assets/Character/Speed.svg'
import Initiative from '~/assets/Character/Initiative.svg'

export default {
  components: { SecondaryStat },
  data() {
    return {
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
      ],
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
