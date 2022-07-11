import colors from 'styles/colors'
import {
  marvelBg,
  dcBg,
  captainAmerica,
  thor,
  hulk,
  blackWidow,
  blackPanther,
  ironman,
  batMan,
  superMan,
  wonderWoman,
  flash,
  aquaMan,
  joker,
} from 'assets/images'

export const universes = {
  Marvel: {
    image: marvelBg,
    name: 'Marvel',
    heroes: [
      { name: 'Captain America', image: captainAmerica },
      { name: 'Thor', image: thor },
      { name: 'Hulk', image: hulk },
      { name: 'Black Widow', image: blackWidow },
      { name: 'Black Panther', image: blackPanther },
      { name: 'Ironman', image: ironman },
    ],
    color: colors.neonRed,
  },
  DC: {
    image: dcBg,
    name: 'DC',
    heroes: [
      { name: 'Batman', image: batMan },
      { name: 'Superman', image: superMan },
      { name: 'Wonder Woman', image: wonderWoman },
      { name: 'The Flash', image: flash },
      { name: 'Aquaman', image: aquaMan },
      { name: 'The Joker', image: joker },
    ],
    color: colors.neonBlue,
  },
}
