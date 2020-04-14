<template lang="pug">
.monster-item
  img.monster-item__artwork(:src="artwork")
  .monster-item__name {{ name }}
  img.monster-item__button-add(:src="$store.state.icons.ui.Add")
</template>

<script>
export default {
  props: {
    artwork: { type: String, required: true },
    name: { type: String, required: true },
  },
}
</script>

<style lang="sass" scoped>
.monster-item
  display: flex
  align-items: center
  font-family: "Exo 2"
  font-weight: 500
  font-size: 12px
  padding: 8px
  border-radius: 8px
  background-color: #171A1C
  color: white
  cursor: pointer
  transition: all ease 0.15s
  &:hover
    background-color: lighten(#171A1C, 2.5)
  &__artwork
    width: 24px
    height: 24px
    border: 2px solid rgba(white, 0.4)
    border-radius: 50%
    margin-right: 12px
  &__name
    margin-top: -1px
    flex-grow: 1
  &__button-add
    margin-right: 2px
    opacity: 0.4
    cursor: pointer
    transition: all ease 0.15s
    &:hover
      opacity: 1
</style>
