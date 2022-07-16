import React, { FC } from 'react'
import styled from 'styled-components/native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export type HeroProps = {
  image: ImageData
  name: string
  onPress?: () => void
  color: string
}

const HeroCard: FC<HeroProps> = ({ image, name, onPress, color }: HeroProps) => {
  return (
    <Container onPress={onPress} color={color}>
      <CustomImage source={image} resizeMode='contain' />
    </Container>
  )
}

export default HeroCard

const Container = styled.Pressable<{ color: string }>`
  width: ${wp(80)}px;
  height: ${hp(50)}px;
  align-self: center;
  justify-content: center;
  align-items: center;
  border-radius: ${wp(5)}px;
  box-shadow: ${p => `0px 0px 10px ${p.color}`};
  elevation: 1;
`

const CustomImage = styled.Image`
  width: 100%;
  height: 100%;
`
