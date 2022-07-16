/* eslint-disable react/destructuring-assignment */
import React, { FC, useContext, useEffect, useState } from 'react'
import styled from 'styled-components/native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { Linking } from 'react-native'
import { MaterialIndicator } from 'react-native-indicators'
import { colors } from '@styles/colors'
import BackHeader from '@components/BackHeader'
import {
  ActorType,
  fetchMovieDetails,
  MovieType,
  SimilarMovieType,
} from '@modules/heroes/data'
import Typography from '@components/Typography'
import LangContext from '@context/LangContext'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

const MovieDetails: FC = (props: any) => {
  const [movie, setMovie] = useState<MovieType | undefined>()
  const [loading, setLoading] = useState<boolean>(false)
  const [movieId, setMovieId] = useState<string>(props?.route.params?.movieId)
  const {
    movieDetails: { movieInfo, trailer, cast, similar },
  } = useContext(LangContext).dictionary

  useEffect(() => {
    const onSuccess = (movieObject: MovieType) => {
      setLoading(false)
      setMovie(movieObject)
    }
    setLoading(true)
    fetchMovieDetails(movieId, onSuccess)
  }, [movieId])

  return (
    <CustomSafeArea>
      <BackHeader />
      <MainContainer>
        {loading ? (
          <MaterialIndicator size={25} color={colors.white} />
        ) : (
          <CustomScroll>
            <MoviePoster source={{ uri: movie?.image }} resizeMode='cover' />
            <SectionContainer>
              <Typography
                text={movie?.title}
                size={20}
                color={colors.white}
                textAlign={'left'}
                fontWeight='800'
                textTransform='uppercase'
              />
              <Typography
                text={`${movie?.runtimeStr} . ${movie?.genreList?.[0]?.value}`}
                size={12}
                color={colors.white}
                textAlign={'center'}
                fontWeight='500'
                textTransform='uppercase'
              />
              <Typography
                text={movie?.year}
                size={12}
                color={colors.white}
                textAlign={'center'}
                fontWeight='500'
                textTransform='uppercase'
              />
            </SectionContainer>
            <SectionContainer>
              <Typography
                text={movieInfo}
                size={18}
                color={colors.white}
                textAlign={'center'}
                fontWeight='600'
              />
              <Typography
                text={movie?.plot}
                size={14}
                color={colors.white}
                textAlign={'left'}
                noLimit
                fontWeight='400'
              />
            </SectionContainer>
            <SectionContainer>
              <Typography
                text={trailer}
                size={18}
                color={colors.white}
                textAlign={'center'}
                fontWeight='600'
              />
              {movie?.trailer?.link && (
                <TrailerContainer
                  onPress={() => Linking.openURL(movie?.trailer?.link)}
                >
                  <TrailerThumbNail
                    source={{ uri: movie?.trailer?.thumbnailUrl }}
                    resizeMode='contain'
                  />
                  <CustomPlayButton
                    name={'play'}
                    size={26}
                    color={colors.white}
                  />
                </TrailerContainer>
              )}
            </SectionContainer>
            <SectionContainer>
              <Typography
                text={cast}
                size={18}
                color={colors.white}
                textAlign={'center'}
                fontWeight='600'
                marginBottom={hp(1)}
              />
              <CustomHorizontalSctoll horizontal>
                {movie?.actorList?.map((actor: ActorType) => (
                  <Cast>
                    <CastImage
                      source={{ uri: actor?.image }}
                      resizeMode='cover'
                    />
                    <Typography
                      text={actor?.name}
                      size={14}
                      color={colors.white}
                      textAlign={'center'}
                      fontWeight='500'
                      marginBottom={hp(1)}
                    />
                    <Typography
                      text={actor?.asCharacter}
                      size={12}
                      color={colors.offWhite}
                      textAlign={'center'}
                      fontWeight='500'
                      marginBottom={hp(1)}
                    />
                  </Cast>
                ))}
              </CustomHorizontalSctoll>
            </SectionContainer>
            {movie?.similars?.length && (
              <SectionContainer>
                <Typography
                  text={similar}
                  size={18}
                  color={colors.white}
                  textAlign={'center'}
                  fontWeight='600'
                  marginBottom={hp(1)}
                />
                <CustomHorizontalSctoll horizontal>
                  {movie?.similars?.map((similarMovie: SimilarMovieType) => (
                    <GhostButton onPress={() => setMovieId(similarMovie?.id)}>
                      <SimilarMoviePoster
                        source={{ uri: similarMovie?.image }}
                      />
                    </GhostButton>
                  ))}
                </CustomHorizontalSctoll>
              </SectionContainer>
            )}
          </CustomScroll>
        )}
      </MainContainer>
    </CustomSafeArea>
  )
}

export default MovieDetails

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

const MoviePoster = styled.Image`
  width: ${wp(100)}px;
  height: ${hp(30)}px;
`

const SectionContainer = styled.View`
  width: ${wp(100)}px;
  border-bottom-width: 0.2px;
  border-bottom-color: ${colors.white};
  align-items: flex-start;
  align-self: center;
  padding: ${wp(4)}px;
`

const TrailerContainer = styled.TouchableOpacity``

const TrailerThumbNail = styled.Image`
  width: ${wp(90)}px;
  height: ${hp(30)}px;
`

const CustomPlayButton = styled(FontAwesome5Icon)`
  position: absolute;
  top: 50%;
  left: 50%;
  z-ndex: 1;
`

const CustomHorizontalSctoll = styled.ScrollView`
  width: ${wp(100)}px;
  align-self: center;
`

const Cast = styled.View``

const CastImage = styled.Image`
  width: ${wp(30)}px;
  height: ${hp(15)}px;
  margin-right: ${wp(1)}px;
`

const GhostButton = styled.TouchableOpacity``

const SimilarMoviePoster = styled.Image`
  width: ${wp(35)}px;
  height: ${hp(25)}px;
`
