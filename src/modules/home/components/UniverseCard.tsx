import React, { FC } from 'react'
import styled from 'styled-components/native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

type UniverseProps = {
  image: ImageData
  onPress: () => void
}

const UniverseCard: FC<UniverseProps> = ({ image, onPress }: UniverseProps) => {
  return (
    <Container onPress={onPress}>
      <CustomImage source={image} />
    </Container>
  )
}

export default UniverseCard

const Container = styled.Pressable`
  width: ${wp(80)}px;
  height: ${hp(30)}px;
  align-self: center;
  justify-content: center;
  align-items: center;
  border-radius: ${wp(5)}px;
`

const CustomImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: ${wp(5)}px;
`
