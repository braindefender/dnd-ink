<template lang="pug">
.message
  img.message__artwork(:src="message.artwork")
  .message__body(
    :class="{ 'message__body--highlight': message.highlight }"
  )
    .message__info
      .message__sender {{ message.sender }}
      .message__time {{ message.time }}
    .message__text {{ message.text }}
  .message__rolls
</template>

<script>
export default {
  props: { message: { type: Object, required: true } },
}
</script>

<style lang="sass" scoped>
.message
  display: flex
  &__artwork
    width: 24px
    height: 24px
    margin-top: 4px
    border-radius: 50%
    border: 2px solid rgba(white, 0.4)
  &__body
    display: flex
    flex-direction: column
    font-family: "Exo 2"
    font-size: 12px
    border-radius: 8px
    width: 312px
    padding: 10px 12px
    background-color: rgba(white, 0.05)
    margin-left: 12px
    margin-right: 12px
    &--highlight
      background-color: rgba(#EB5757, 0.2)
  &__info
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 3px
    margin-top: -1px
  &__sender, &__time
    font-weight: 500
    opacity: 0.4
  &__text
    opacity: 0.6
</style>
