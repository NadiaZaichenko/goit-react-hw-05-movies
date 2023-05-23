import PropTypes from 'prop-types';
import MovieItem from "components/MoviesGalleryItem/MoviesGalleryItem"
import { Gallery } from "./MovieGallery.styled";

const MoviesGallery = ({movies}) => {
    return(
        <Gallery>
            {movies.map(movie => (
                <MovieItem 
                key={movie.id} 
                movie={movie}
                />
            ))}
        </Gallery>
    )
}
MoviesGallery.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            posterPath: PropTypes.string,
            overview: PropTypes.string,
            genres: PropTypes.string,
            vote: PropTypes.number,
            year: PropTypes.string,  
        }).isRequired
    ).isRequired
};

export default MoviesGallery;