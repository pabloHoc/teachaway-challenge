import { Link } from 'react-router-dom'
import Media from 'components/Media/Media'
import styles from './Card.module.css'

const Card = ({ id, src, title, type }) => {
  return (
    <Link to={`/image/${id}`} className={styles.card}>
      <div className={styles.cardMedia}>
        <Media type={type} src={src} />
      </div>
      <p>{title}</p>
    </Link>
  )
}

export default Card
