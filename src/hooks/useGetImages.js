import { useInfiniteQuery } from 'react-query'
import getImages from 'services/getImages'

const useGetImages = ({ section, sort, window, showViral }) => {
  return useInfiniteQuery(
    ['images', { section, sort, window, showViral }],
    getImages,
    {
      getNextPageParam: (lastGroup) => lastGroup.pageParam,
      keepPreviousData: true,
    }
  )
}

export default useGetImages
