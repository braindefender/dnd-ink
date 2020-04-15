<template lang="pug">
  .journal
    .journal__log
      Message(
        v-for="(message, index) in log" 
        :key="index"
        :message="message" 
      )
    .journal-panel
      UIIconButton(name="JournalAttach")
      UIInput(
        placeholder="Send message..."
        example="Or type /roll 3d8+6"
        v-model="inputMessage"
        :style="{ marginLeft: '12px', marginRight: '12px' }"
      )
      UIIconButton(name="JournalSend")
</template>

<script>
import Message from './Message'
import UIInput from '~/components/ui/UIInput'
import UIIconButton from '~/components/ui/UIIconButton'

import Artwork from '~/assets/Character/Artwork.png'

export default {
  components: { Message, UIInput, UIIconButton },
  data() {
    return {
      inputMessage: '',
      log: [
        {
          sender: 'lmbd (Game Master)',
          highlight: true,
          text:
            'В углу таверны вы видите тёмную фигуру. Её лицо скрыто за капюшоном.',
          time: '23:50',
          artwork: Artwork,
        },
        {
          sender: 'Джонатан Виски',
          text: 'Я пытаюсь незаметно украсть у неё выпивку!',
          time: '23:51',
          artwork: Artwork,
        },
      ],
    }
  },
}
</script>

<style lang="sass" scoped>
.journal
  color: white
  &__log
    display: flex
    flex-direction: column
    padding: 12px 24px
    > div
      margin-bottom: 12px
      &:last-child
        margin-bottom: 0

.journal-panel
  display: flex
  align-items: center
  justify-content: space-between
  height: 64px
  background-color: #171A1C
  padding: 0 24px
</style>
