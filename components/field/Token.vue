<template lang="pug">
.token
  .token__background
    img.token__artwork(:src="entity.artwork")
  .token__indicator
  BoundingBox.bounding-box
  .token__info
    .token__text-block
      .token__armor AC {{ entity.armor.current }}
      .token__health {{ entity.health.current }}
        span.token__health.token__health--fade /{{ entity.health.total }}
    .token__bar-block
      .token__bar-bg
      .token__bar(:style="{ width: progress }")
</template>

<script>
import BoundingBox from '~/assets/Field/BoundingBox.svg?inline'

export default {
  components: { BoundingBox },
  props: {
    entity: { type: Object, required: true },
  },
  computed: {
    armor() {
      return `AC ${this.entity.armor}`
    },
    progress() {
      return `${(this.entity.health.current / this.entity.health.total) * 100}%`
    },
  },
}
</script>

<style lang="sass" scoped>
.token
  position: relative
  width: 64px
  height: 64px
  &__background
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color: rgba(black, 0.4)
    border-top-left-radius: 4px
    border-top-right-radius: 4px
    overflow: hidden
  &__artwork
    position: absolute
    width: 100%
    height: 100%
  &__info
    position: absolute
    left: 0
    right: 0
    bottom: -22px
    background-color: #171A1C
    color: white
    padding: 4px
    height: 22px
    border-bottom-left-radius: 4px
    border-bottom-right-radius: 4px
  &__text-block
    display: flex
    justify-content: space-between
    font-size: 8px
    font-weight: bold
    font-family: "Exo 2"
    margin-bottom: 2px
    margin-top: -2px
  &__health--fade
    opacity: 0.4
  &__bar-block
    position: relative
    width: 100%
    height: 4px
  &__bar-bg
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    border-radius: 5em
    background-color: rgba(white, 0.2)
  &__bar
    position: absolute
    top: 0
    left: 0
    height: 4px
    border-radius: 5em
    background-color: #31FF87

.bounding-box
  z-index: 100
  position: absolute
  top: -5px
  left: -5px
  right: -5px
  bottom: -5px
  path
    &:nth-last-child(2)
      fill: #F8CD78
</style>
