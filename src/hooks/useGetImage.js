import { useQuery } from 'react-query'
import getImage from 'services/getImage'

const useGetImage = (id) => {
  return useQuery(['image', id], getImage)
}

export default useGetImage
