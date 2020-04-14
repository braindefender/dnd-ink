<template lang="pug">
.ui-input
  input.ui-input__text(
    :placeholder="placeholder"
    v-bind:value="value"
    @input="$emit('input', $event.target.value)"
  )
  transition(name="slide-fade")
    span.ui-input__example(v-if="inputIsEmpty") {{ example }}
</template>

<script>
export default {
  name: 'UIInput',
  props: {
    example: {
      type: String,
      required: false,
      default: () => null,
    },
    placeholder: {
      type: String,
      required: false,
      default: () => 'Type...',
    },
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    inputIsEmpty() {
      return this.value === '' || this.value === null
    },
  },
}
</script>

<style lang="sass" scoped>
.ui-input
  flex-grow: 1
  display: flex
  align-items: center
  height: 32px
  border-radius: 8px
  background-color: #22262A
  color: white
  padding-left: 12px
  padding-right: 12px
  position: relative
  &__text
    margin-top: -1px
    width: 100%
    color: inherit
    border: none
    outline: none
    background: none
    font-family: "Exo 2"
    font-size: 12px
    font-weight: 500
    height: 24px
    &::placeholder
      color: rgba(white, 0.4)
      opacity: 1
  &__example
    position: absolute
    right: 12px
    font-size: 11px
    flex-shrink: 0
    color: rgba(white, 0.2)
    pointer-events: none

  .slide-fade-enter-active, .slide-fade-leave-active
    transition: all .15s
  .slide-fade-enter, .slide-fade-leave-to
    opacity: 0
    right: 7px
</style>
