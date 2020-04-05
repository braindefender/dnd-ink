<template lang="pug">
.tab-button(:class="{ active }" @click="goto(index)")
  img.tab-button__img(:src="$store.state.icons.tabs[name]")
  .tab-button__text {{ name }}
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    index: { type: Number, required: true },
    active: { type: Boolean, required: false, default: () => false },
  },
  methods: {
    goto(index) {
      // console.log(this.$store._mutations)
      this.$store.commit.sync({ type: 'tabs/goto', index })
    },
  },
}
</script>

<style lang="sass" scoped>
.tab-button
  position: relative
  display: flex
  align-items: center
  justify-content: center
  width: 64px
  height: 64px
  cursor: pointer
  &:last-child
    margin-right: 0
  &:hover
    .tab-button__img
      width: 28px
      height: 28px
      bottom: 8px
    .tab-button__text
      bottom: 8px
      opacity: 1
  &:active
    .tab-button__img
      width: 24px
      height: 24px
  &.active
    .tab-button__img
      opacity: 0.8
    .tab-button__text
      color: rgba(white, 0.8)

.tab-button__img
  position: relative
  width: 24px
  height: 24px
  bottom: 0
  transition: all ease 0.2s
  opacity: 0.4

.tab-button__text
  position: absolute
  bottom: 0px
  font-size: 13px
  transition: all ease 0.2s
  color: rgba(white, 0.4)
  opacity: 0
</style>
