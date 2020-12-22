import Card from 'components/Card/Card'
import styles from './Gallery.module.css'

const Gallery = ({ data = [] }) => {
  return (
    <div className={styles.gallery}>
      {data.map((img) => (
        <Card
          key={img.images[0].id}
          id={img.id}
          src={img.images[0].link}
          title={img.title}
          type={img.images[0].type}
        />
      ))}
    </div>
  )
}

export default Gallery
