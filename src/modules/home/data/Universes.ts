import { colors } from '@styles/colors'
import { images } from '@assets/images'

export type UniverseType = {
  name: string
  image: ImageData
  heroes: HeroType[]
}

export type HeroType = {
  name: string
  image: string
}

export const universes = {
  Marvel: {
    image: images.marvelBg,
    name: 'Marvel',
    heroes: [
      { name: 'Captain America', image: images.captainAmerica },
      { name: 'Thor', image: images.thor },
      { name: 'Hulk', image: images.hulk },
      { name: 'Black Widow', image: images.blackWidow },
      { name: 'Black Panther', image: images.blackPanther },
      { name: 'Ironman', image: images.ironman },
    ],
    color: colors.neonRed,
  },
  DC: {
    image: images.dcBg,
    name: 'DC',
    heroes: [
      { name: 'Batman', image: images.batMan },
      { name: 'Superman', image: images.superMan },
      { name: 'Wonder Woman', image: images.wonderWoman },
      { name: 'Flash', image: images.flash },
      { name: 'Aquaman', image: images.aquaMan },
      { name: 'Joker', image: images.joker },
    ],
    color: colors.neonBlue,
  },
}
