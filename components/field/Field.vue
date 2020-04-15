<template lang="pug">
.field(ref="field")
  .field__layers(:style="style")
    Layer(:width="width" :height="height" :zin="0")
      .cell(
        v-for="(cell, index) in cells"
        :key="index"
      )
    Layer(:width="width" :height="height" :zin="1")
      Token(:entity="entity" :style="{ gridArea: '12 / 12' }")
</template>

<script>
import Layer from './Layer'
import Token from './Token'

import Image from '~/assets/Character/Artwork.png'

export default {
  components: { Layer, Token },
  props: {
    width: { type: Number, required: true },
    height: { type: Number, required: true },
  },
  data() {
    return {
      entity: {
        health: { current: 16, total: 22 },
        armor: { current: 14, total: 14 },
        artwork: Image,
      },
      cells: [...Array(this.width * this.height).keys()],
      style: {
        width: `${this.width * 64}px`,
        height: `${this.height * 64}px`,
      },
    }
  },
  mounted() {
    const viewWidth = this.$refs.field.clientWidth
    const viewHeight = this.$refs.field.clientHeight

    this.$refs.field.scrollLeft = Math.abs(viewWidth - this.width * 64) / 2
    this.$refs.field.scrollTop = Math.abs(viewHeight - this.height * 64) / 2
  },
}
</script>

<style lang="sass" scoped>
.field
  width: 100%
  height: 100%
  overflow: scroll
  position: relative
  scrollbar-width: thin
  scrollbar-color: dark
  scrollbar-color: rgba(white, 0.05) transparent
  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track
    background: transparent
  &::-webkit-scrollbar
    background: transparent
    width: 8px
  &::-webkit-scrollbar-thumb
    background-color: rgba(white, 0.05)
  &__layers
    overflow: hidden
.cell
  border: 1px solid rgba(white, 0.05)
  width: 64px
  height: 64px
</style>
