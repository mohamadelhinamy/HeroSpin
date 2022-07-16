/* eslint-disable react/destructuring-assignment */
import React, { FC, useContext, useEffect, useState } from 'react'
import styled from 'styled-components/native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import { MaterialIndicator } from 'react-native-indicators'
import { colors } from '@styles/colors'
import BackHeader from '@components/BackHeader'
import { fetchHeroMovies, MoviesType } from '@modules/heroes/data'
import Typography from '@components/Typography'
import LangContext from '@context/LangContext'

const HeroMovies: FC = (props: any) => {
  const navigation = useNavigation()
  const hero = props?.route.params?.hero
  const [movies, setMovies] = useState<MoviesType[] | []>([])
  const [loading, setLoading] = useState<boolean>(false)
  const {
    heroMovies: { pick },
  } = useContext(LangContext).dictionary

  useEffect(() => {
    const onSuccess = (moviesArray: MoviesType[]) => {
      setMovies(moviesArray)
      setLoading(false)
    }
    setLoading(true)
    fetchHeroMovies(hero?.name, onSuccess)
  }, [hero])

  const selectARandomMovie = () => {
    let rand = Math.random() * movies?.length
    rand = Math.floor(rand)
    navigation.navigate('movieDetails', { movieId: movies[rand]?.id })
  }

  return (
    <CustomSafeArea>
      <BackHeader />
      <MainContainer>
        {loading ? (
          <MaterialIndicator size={25} color={colors.white} />
        ) : (
          <CustomScroll>
            <MoviesContainer>
              {movies?.map((movie: MoviesType) => (
                <GhostButton
                  onPress={() =>
                    navigation.navigate('movieDetails', { movieId: movie.id })
                  }
                  key={movie?.id}
                >
                  <MoviePoster
                    key={movie?.id}
                    source={{ uri: movie.image }}
                    resizeMode='cover'
                  />
                </GhostButton>
              ))}
            </MoviesContainer>
          </CustomScroll>
        )}
        <PickRandomButton
          disabled={!movies?.length}
          onPress={selectARandomMovie}
        >
          <Typography
            text={pick}
            size={20}
            color={colors.white}
            textAlign={'center'}
            fontWeight='bold'
            textTransform='uppercase'
          />
        </PickRandomButton>
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

const PickRandomButton = styled.Pressable`
  width: ${wp(100)}px;
  height: ${hp(12)}px;
  background-color: ${colors.orange};
  padding-top: ${hp(2)}px;
`
