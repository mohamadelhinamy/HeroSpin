/* eslint-disable react/destructuring-assignment */
import React, { FC, useRef, useContext, useState } from 'react'
import styled from 'styled-components/native'
import Carousel from 'react-native-snap-carousel'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import { colors } from '@styles/colors'
import { universes } from '@modules/home/data/Universes'
import HeroCard from '@modules/heroes/components/HeroCard'
import LangContext from '@context/LangContext'
import BackHeader from '@components/BackHeader'
import Typography from '@components/Typography'

type HeroType = {
  name: string
  image: string
}

const Heroes: FC = (props: any) => {
  const {
    heroes: { pick, showHeroMovie },
  } = useContext(LangContext).dictionary
  const navigation = useNavigation()
  const universe: 'Marvel' | 'DC' = props?.route.params?.universe
  const carouselRef = useRef<any>()
  const [selectedHero, setSelectedHero] = useState<HeroType>(
    universes[universe]?.heroes[0],
  )

  const pickARandomHero = (activeIndex: number) => {
    let rand
    while (rand === activeIndex || !rand) {
      rand = Math.random() * universes[universe]?.heroes.length
      rand = Math.floor(rand)
    }
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
            <HeroCard
              name={item.name}
              image={item.image}
              color={universes[universe]?.color}
            />
          )}
          sliderWidth={wp(100)}
          slideStyle={SlideStyle}
          sliderHeight={hp(60)}
          itemWidth={wp(70)}
          itemHeight={hp(50)}
          layout={'default'}
          inactiveSlideOpacity={1}
          inactiveSlideScale={0.75}
          inactiveSlideShift={0.5}
          containerCustomStyle={ContainerCustomStyle}
          loop
          enableMomentum
          activeAnimationType='spring'
          onSnapToItem={index =>
            setSelectedHero(universes[universe]?.heroes[index])
          }
        />
        {selectedHero && (
          <ChooseButton
            onPress={() =>
              navigation.navigate('heroMovies', { hero: selectedHero })
            }
            color={universes[universe]?.color}
          >
            <Typography
              text={showHeroMovie(selectedHero?.name)}
              size={20}
              color={universes[universe]?.color}
              textAlign={'center'}
              fontWeight='bold'
            />
          </ChooseButton>
        )}
        <GhostButton
          onPress={() => pickARandomHero(carouselRef?.current?.currentIndex)}
        >
          <Typography
            text={pick}
            size={18}
            color={colors.white}
            textAlign={'center'}
            fontWeight='bold'
          />
        </GhostButton>
      </MainContainer>
    </CustomSafeArea>
  )
}

export default Heroes

const SlideStyle = {
  width: wp(90),
}

const ContainerCustomStyle = {
  maxHeight: hp(60),
}

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
  min-height: ${hp(8)}px;
  border-radius: ${wp(5)}px;
  border-width: 5px;
  border-color: ${p => p.color};
  justify-content: center;
  align-items: center;
`

const GhostButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`
