import { useContext } from 'react'
import { GalleryContext } from 'contexts/GalleryContext'

const useGalleryContext = () => {
  return useContext(GalleryContext)
}

export default useGalleryContext
