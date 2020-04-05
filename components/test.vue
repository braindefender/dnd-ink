<template lang="pug">
.tab-view
  transition(:name="`slide-${direction}`")
    component.tab-view__tab(:is="component")
</template>

<script>
export default {
  props: {
    tabs: { type: Array, required: true },
    current: { type: Number, required: true },
  },
  data() {
    return { direction: 'left' }
  },
  computed: {
    component() {
      return this.tabs[this.current].component
    },
  },
  watch: {
    current(oldVal, newVal) {
      this.direction = newVal > oldVal ? 'left' : 'right'
    },
  },
}
</script>

<style lang="sass" scoped>
.tab-view
  display: flex
  overflow: hidden
  position: relative
  flex-grow: 1

  &__tab
    position: absolute
    left: 0
    right: 0

.slide-right-enter
  transition: all ease 0.75s
  transform: translateX(480px) scale(0.95)

.slide-right-enter-active
  transition: all ease 0.75s
  opacity: 0

.slide-right-enter-to
  transition: all ease 0.75s
  transform: translateX(0px)
  opacity: 1

.slide-right-leave
  transition: all ease 0.75s

.slide-right-leave-active
  transform: translateX(0px)
  opacity: 0

.slide-right-leave-to
  transform: translateX(-480px) scale(0.95)
  transition: all ease 0.75s

.slide-left-enter
  transition: all ease 0.75s
  transform: translateX(-480px) scale(0.95)

.slide-left-enter-active
  transition: all ease 0.75s
  opacity: 0

.slide-left-enter-to
  transition: all ease 0.75s
  transform: translateX(0px)
  opacity: 1

.slide-left-leave
  transition: all ease 0.75s

.slide-left-leave-active
  transform: translateX(0px)
  opacity: 0

.slide-left-leave-to
  transform: translateX(480px) scale(0.95)
  transition: all ease 0.75s
</style>
