import useGalleryContext from 'hooks/useGalleryContext'
import styles from './GalleryFilters.module.css'

const GalleryFilters = () => {
  const {
    section,
    setSection,
    sort,
    setSort,
    window,
    setWindow,
    showViral,
    setShowViral,
  } = useGalleryContext()

  return (
    <div className={styles.filtersContainer}>
      <select
        value={section}
        onChange={(event) => setSection(event.target.value)}
      >
        <option value='hot'>Most Viral</option>
        <option value='user'>User Submitted</option>
        <option value='top'>Highest Scoring</option>
      </select>
      <div>
        {section === 'top' ? (
          <select
            value={window}
            onChange={(event) => setWindow(event.target.value)}
          >
            <option value='day'>Day</option>
            <option value='week'>Week</option>
            <option value='month'>Month</option>
            <option value='year'>Year</option>
            <option value='all'>All</option>
          </select>
        ) : (
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
          >
            <option value='viral'>Popular</option>
            <option value='top'>Best</option>
            <option value='time'>Newest</option>
            {section === 'user' && <option value='rising'>Rising</option>}
          </select>
        )}
        {section === 'user' && (
          <label className={styles.viralCheckbox}>
            <input
              type='checkbox'
              checked={showViral}
              onChange={() => setShowViral(!showViral)}
            />{' '}
            Show viral
          </label>
        )}
      </div>
    </div>
  )
}

export default GalleryFilters
