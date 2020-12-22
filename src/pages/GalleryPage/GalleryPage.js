import useGalleryContext from 'hooks/useGalleryContext'
import Container from 'components/Container/Container'
import Gallery from 'components/Gallery/Gallery'
import GalleryFilters from 'components/GalleryFilters/GalleryFilters'
import styles from './GalleryPage.module.css'

const GalleryPage = () => {
  const { data, fetchNextPage, isFetchingNextPage } = useGalleryContext()

  return (
    <Container>
      <GalleryFilters />
      {data && (
        <Gallery
          data={data.pages
            .flatMap((page) => page.data.data)
            .filter((img) => img.is_album)}
        />
      )}
      <button
        className={styles.loadMoreBtn}
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
      >
        {isFetchingNextPage ? 'Loading more...' : 'Load More'}
      </button>
    </Container>
  )
}

export default GalleryPage
