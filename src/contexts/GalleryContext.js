import { createContext, useState } from 'react'
import useGetImages from 'hooks/useGetImages'

const GalleryContext = createContext()

const GalleryProvider = ({ children }) => {
  const [section, setSection] = useState('hot')
  const [sort, setSort] = useState('viral')
  const [window, setWindow] = useState('day')
  const [showViral, setShowViral] = useState(true)

  const { data, fetchNextPage, isFetchingNextPage } = useGetImages({
    section,
    sort,
    window,
    showViral,
  })

  return (
    <GalleryContext.Provider
      value={{
        section,
        setSection,
        sort,
        setSort,
        window,
        setWindow,
        showViral,
        setShowViral,
        data,
        fetchNextPage,
        isFetchingNextPage,
      }}
    >
      {children}
    </GalleryContext.Provider>
  )
}

export { GalleryContext }
export default GalleryProvider
