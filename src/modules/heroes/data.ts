import axiosInstance from '@config/api'

export type MoviesType = {
  id: string
  resultType: string
  image: string
  title: string
  description: string
}

export const fetchHeroMovies = async (
  hero: string,
  onSuccess: (movies: MoviesType[]) => void,
): Promise<void> => {
  const response = await axiosInstance.get(`/${hero}`)
  onSuccess(response?.data?.results)
}
