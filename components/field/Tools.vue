<template lang="pug">
.tools
  UIIconButton(name="Pencil")
  UIIconButton(name="Highlighter")
  UIIconButton(name="Eraser")
  UIIconButton(name="Ruler")
  UIIconButton(name="Select")
  UIIconButton(name="Palette")
</template>

<script>
import UIIconButton from '~/components/ui/UIIconButton'

export default {
  components: { UIIconButton },
}
</script>

<style lang="sass" scoped>
.tools
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  position: absolute
  top: 12px
  left: 12px
  width: 48px
  padding: 14px
  border-radius: 8px
  background-color: #171A1C
  > *
    margin-bottom: 16px
    &:last-child
      margin-bottom: 0
</style>
