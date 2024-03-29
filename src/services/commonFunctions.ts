/* eslint-disable max-len */
import { Dimensions } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const screenWidth = Dimensions.get('window').width
export const screenHeight = Dimensions.get('window').height

const viewPortSize = { width: screenWidth, height: screenHeight }

export const perfectFont = (value: number): number =>
  RFPercentage((value / viewPortSize.height) * 100)
