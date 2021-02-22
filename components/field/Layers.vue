<template lang="pug">
.layers
  .layer(
    v-for="(layer, index) in layers"
    :key="index"
    :class="{'layer--active': index == active}"
    @click="select(index)"
  )
    img.layer__icon(:src="layer.icon")
    .layer__name {{ layer.name }}
</template>

<script>
import Drawings from '~/assets/Field/Layers/Drawings.svg'
import Hidden from '~/assets/Field/Layers/Hidden.svg'
import Image from '~/assets/Field/Layers/Image.svg'
import Notes from '~/assets/Field/Layers/Notes.svg'
import Visible from '~/assets/Field/Layers/Visible.svg'

export default {
  data() {
    return {
      active: 0,
      layers: [
        {
          name: 'Players Layer',
          icon: Visible,
        },
        {
          name: 'Players Notes',
          icon: Drawings,
        },
        {
          name: 'DM Layer',
          icon: Hidden,
        },
        {
          name: 'DM Notes',
          icon: Notes,
        },
        {
          name: 'Background',
          icon: Image,
        },
      ],
    }
  },
  methods: {
    select(index) {
      this.active = index
    },
  },
}
</script>

<style lang="sass" scoped>
.layers
  position: absolute
  top: 12px
  right: 12px
  display: flex
  flex-direction: column
  border-radius: 8px
  background-color: #171A1C
  color: white
  padding: 8px

.layer
  display: flex
  align-items: center
  padding: 4px 6px
  padding-right: 11px
  border-radius: 4px
  font-family: "Exo 2"
  font-size: 12px
  font-weight: 500
  letter-spacing: -0.15px
  border: 2px solid rgba(#F8CD78, 0)
  opacity: 0.4
  cursor: pointer
  transition: all ease 0.15s
  &--active
    background-color: #22262A
    border: 2px solid #F8CD78
    opacity: 1
  &--hover
    border: 2px solid #F8CD78
    opacity: 1
  &:hover
    background-color: #22262A
    opacity: 1
  &__icon
    width: 20px
    height: 20px
    margin-right: 8px
  &__name
    margin-top: -1px
</style>
