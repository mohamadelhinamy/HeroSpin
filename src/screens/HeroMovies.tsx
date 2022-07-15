/* eslint-disable react/destructuring-assignment */
import React, { FC } from 'react'
import styled from 'styled-components/native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { colors } from '@styles/colors'
import BackHeader from '@components/BackHeader'

const Heroes: FC = (props: any) => {
  const _universe = props?.route.params?.universe
  return (
    <CustomSafeArea>
      <BackHeader />
      <MainContainer />
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

const GhostButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`

const GhostButtonText = styled.Text`
  font-size: 18px;
  color: ${colors.white};
  font-weight: bold;
  text-transform: uppercase;
`
