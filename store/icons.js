import d4 from '~/assets/Dice/d4.svg'
import d6 from '~/assets/Dice/d6.svg'
import d8 from '~/assets/Dice/d8.svg'
import d10 from '~/assets/Dice/d10.svg'
import d12 from '~/assets/Dice/d12.svg'
import d20 from '~/assets/Dice/d20.svg'

import Battle from '~/assets/Tabs/Battle.svg'
import Character from '~/assets/Tabs/Character.svg'
import Journal from '~/assets/Tabs/Journal.svg'
import Library from '~/assets/Tabs/Library.svg'
import Music from '~/assets/Tabs/Music.svg'
import Settings from '~/assets/Tabs/Settings.svg'

import Add from '~/assets/UI/Add.svg'
import Back from '~/assets/UI/Back.svg'
import Cancel from '~/assets/UI/Cancel.svg'
import Eraser from '~/assets/UI/Eraser.svg'
import Highlighter from '~/assets/UI/Highlighter.svg'
import Load from '~/assets/UI/Load.svg'
import Ruler from '~/assets/UI/Ruler.svg'
import Save from '~/assets/UI/Save.svg'
import Search from '~/assets/UI/Search.svg'
import Select from '~/assets/UI/Select.svg'
import Sort from '~/assets/UI/Sort.svg'
import Palette from '~/assets/UI/Palette.svg'
import Pencil from '~/assets/UI/Pencil.svg'

import JournalAttach from '~/assets/Journal/Attach.svg'
import JournalSend from '~/assets/Journal/Send.svg'

const state = () => ({
  dices: { d4, d6, d8, d10, d12, d20 },
  tabs: { Battle, Character, Journal, Library, Music, Settings },
  ui: {
    Add,
    Back,
    Cancel,
    Eraser,
    Load,
    Save,
    Search,
    Sort,
    JournalAttach,
    JournalSend,
    Palette,
    Select,
    Ruler,
    Pencil,
    Highlighter,
  },
})

export default { state, namespaced: true }
