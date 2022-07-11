/* eslint-disable react/destructuring-assignment */
import React, { FC, useRef, useContext } from 'react'
import styled from 'styled-components/native'
import Carousel from 'react-native-snap-carousel'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import colors from 'styles/colors'
import { universes } from 'modules/home/data/Universes'
import HeroCard from 'modules/heroes/components/HeroCard'
import LangContext from 'context/LangContext'
import BackHeader from 'components/BackHeader'

const Heroes: FC = (props: any) => {
  const {
    heroes: { pick },
  } = useContext(LangContext).dictionary
  const universe = props?.route.params?.universe
  const carouselRef = useRef()

  const pickARandomHero = () => {
    let rand = Math.random() * universes[universe]?.heroes.length
    console.log(rand) // say 99.81321410836433
    rand = Math.floor(rand) // 99

    carouselRef?.current?.snapToItem(rand)
  }

  return (
    <CustomSafeArea>
      <BackHeader color={universes[universe]?.color} />
      <MainContainer>
        <Carousel
          vertical
          ref={carouselRef}
          data={universes[universe]?.heroes}
          renderItem={({ item }: any) => (
            <HeroCard name={item.name} image={item.image} color={universes[universe]?.color} />
          )}
          sliderWidth={wp(100)}
          slideStyle={{ width: wp(90) }}
          sliderHeight={hp(60)}
          itemWidth={wp(70)}
          itemHeight={hp(50)}
          layout={'default'}
          inactiveSlideOpacity={1}
          inactiveSlideScale={0.75}
          inactiveSlideShift={0.5}
          containerCustomStyle={{ alignSelf: 'center', maxHeight: hp(60) }}
          loop
          enableMomentum
          activeAnimationType='spring'
          onSnapToItem={index => console.log(universes[universe]?.heroes[index], 'item')}
        />
        <ChooseButton onPress={pickARandomHero} color={universes[universe]?.color}>
          <ChooseText color={universes[universe]?.color}>{pick}</ChooseText>
        </ChooseButton>
      </MainContainer>
    </CustomSafeArea>
  )
}

export default Heroes

const CustomSafeArea = styled.SafeAreaView`
  background-color: ${colors.black};
`

const MainContainer = styled.View`
  background-color: ${colors.black};
  width: ${wp(100)}px;
  height: ${hp(92)}px;
  align-self: center;
  justify-content: space-evenly;
  align-items: center;
`

const ChooseButton = styled.Pressable<{ color: string }>`
  width: ${wp(70)}px;
  height: ${hp(8)}px;
  border-radius: ${wp(5)}px;
  border-width: 5px;
  border-color: ${p => p.color};
  justify-content: center;
  align-items: center;
`

const ChooseText = styled.Text<{ color: string }>`
  font-size: 20px;
  color: ${p => p.color};
  font-weight: bold;
`
