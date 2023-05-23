import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { GalleryItem, Img, Title,LinkItem } from "./MoviesGalleryItem.styled"

const MovieItem = ({movie: {id, title, posterPath}}) => {

    const location = useLocation()
  return(
    <GalleryItem>
        <LinkItem to={`/movies/${id}`} state = {{from: location}}>
         <Img src={posterPath} alt={title} />
         <Title>{title}</Title>
        </LinkItem>
    </GalleryItem>
  )
}
MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    posterPath: PropTypes.string
  }).isRequired
}

export default MovieItem;