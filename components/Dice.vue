<template lang="pug">
.dice
  img.dice__img(:src="$store.state.icons.dices[dice]")
  .dice__text {{ dice }}
</template>

<script>
export default {
  props: { dice: { type: String, required: true } },
}
</script>

<style lang="sass" scoped>
.dice
  font-family: "Exo 2"
  position: relative
  display: flex
  align-items: center
  justify-content: center
  width: 64px
  height: 96px
  cursor: pointer
  margin-right: 10px
  &:last-child
   margin-right: 0
  &:hover
    .dice__img
      width: 54px
      height: 54px
      bottom: 8px
    .dice__text
      bottom: 10px
      opacity: 1
  &:active
    .dice__img
      width: 48px
      height: 48px

.dice__img
  position: relative
  width: 48px
  height: 48px
  bottom: 0
  transition: all ease 0.2s

.dice__text
  position: absolute
  bottom: 2px
  transition: all ease 0.2s
  color: rgba(white, 0.4)
  opacity: 0
</style>
