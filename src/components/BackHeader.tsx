import React, { FC } from 'react'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'
import { colors } from '@styles/colors'
import styled from 'styled-components/native'

export interface BackHeaderProps {
  color?: string
}

const BackHeader: FC<BackHeaderProps> = (props: BackHeaderProps) => {
  const { color } = props
  const navigation = useNavigation()
  return (
    <SafeContainer>
      <Container>
        <Back onPress={() => navigation.goBack()}>
          <FontAwesome5Icon name={'chevron-left'} size={26} color={color || colors.white} />
        </Back>
      </Container>
    </SafeContainer>
  )
}

export default BackHeader

const SafeContainer = styled.SafeAreaView``

const Container = styled.View`
  width: 85%;
  align-self: center;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const Back = styled.Pressable``
