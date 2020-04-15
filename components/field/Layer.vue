<template lang="pug">
.layer(
  :style="style"
)
  slot
  
</template>

<script>
export default {
  props: {
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    zin: { type: Number, required: true },
  },
  data() {
    return {
      style: {
        gridTemplateColumns: `repeat(${this.width}, 64px)`,
        gridTemplateRows: `repeat(${this.height}, 64px)`,
        top: `-${this.height * 64 * this.zin}px`,
      },
    }
  },
}
</script>

<style lang="sass" scoped>
.layer
  display: grid
  position: relative
</style>
