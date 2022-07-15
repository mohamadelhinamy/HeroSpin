/* eslint-disable react/destructuring-assignment */
import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components/native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { colors } from '@styles/colors'
import BackHeader from '@components/BackHeader'
import { fetchHeroMovies, MoviesType } from '@modules/heroes/data'

const HeroMovies: FC = (props: any) => {
  const universe = props?.route.params?.universe
  const hero = props?.route.params?.hero
  const [movies, setMovies] = useState<MoviesType[] | []>([])

  useEffect(() => {
    const onSuccess = (moviesArray: MoviesType[]) => {
      setMovies(moviesArray)
    }
    fetchHeroMovies(hero?.name, onSuccess)
  }, [hero])

  return (
    <CustomSafeArea>
      <BackHeader />
      <MainContainer>
        <CustomScroll>
          <MoviesContainer>
            {movies?.map((movie: MoviesType) => (
              <GhostButton>
                <MoviePoster
                  key={movie.id}
                  source={{ uri: movie.image }}
                  resizeMode='cover'
                />
              </GhostButton>
            ))}
          </MoviesContainer>
        </CustomScroll>
      </MainContainer>
    </CustomSafeArea>
  )
}

export default HeroMovies

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

const CustomScroll = styled.ScrollView`
  width: 100%;
`

const MoviesContainer = styled.View`
  width: ${wp(100)}px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`

const MoviePoster = styled.Image`
  width: ${wp(50)}px;
  height: ${hp(35)}px;
`

const GhostButton = styled.TouchableOpacity``
