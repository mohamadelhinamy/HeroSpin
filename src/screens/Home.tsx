import React, { FC, useContext } from 'react'
import styled from 'styled-components/native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { Spotlight } from 'react-native-spotlight'
import colors from 'styles/colors'
import { universes } from 'modules/home/data/Universes'
import UniverseCard, { UniverseProps } from 'modules/home/components/UniverseCard'
import LangContext from 'context/LangContext'
import { useNavigation } from '@react-navigation/native'

const Home: FC = () => {
  const {
    home: { title },
  } = useContext(LangContext).dictionary
  const navigation = useNavigation()

  return (
    <CustomSafeArea>
      <MainContainer>
        <Spotlight>
          <Title>{title}</Title>
        </Spotlight>
        {Object.values(universes).map((universe: UniverseProps, index: number) => (
          <UniverseCard
            image={universe?.image}
            name={universe?.name}
            key={index}
            onPress={() => navigation.navigate('heroes', { universe: universe?.name })}
          />
        ))}
      </MainContainer>
    </CustomSafeArea>
  )
}

export default Home

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

const Title = styled.Text`
  font-size: 20px;
  font-weight: 800;
  color: ${colors.white};
  text-align: center;
`
