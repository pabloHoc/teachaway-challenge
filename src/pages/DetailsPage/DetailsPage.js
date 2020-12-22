import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import useGetImage from 'hooks/useGetImage'
import Container from 'components/Container/Container'
import Media from 'components/Media/Media'
import styles from './DetailsPage.module.css'

const DetailsPage = () => {
  const { id } = useParams()
  const { data } = useGetImage(id)

  if (!data) {
    return null
  }

  const { data: { title, description, images, score, ups, downs } = {} } = data
  const { link, type } = images?.[0] || {}

  return (
    <Container className={styles.detailsContainer}>
      <Link to='/' className={styles.goBackLink}>
        Go back
      </Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul className={styles.stats}>
        <li>Score: {score}</li>
        <li>Ups: {ups}</li>
        <li>Downs: {downs}</li>
      </ul>
      <Media type={type} src={link} className={styles.media} />
    </Container>
  )
}

export default DetailsPage
