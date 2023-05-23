import { useLocation, Outlet } from "react-router-dom";
import PropTypes from 'prop-types';
import { Suspense } from "react";
import { IoIosArrowRoundBack } from 'react-icons/io';
import Loader from "components/Loader/Loader";
import { Container, Image, InfoMovie, Navigate, ButtonLink, Title, Rate, Main, MovieInfoWrapper, H2, P } from "./Movie.styled";


const Movie = ({movie: { title, posterPath, overview, genres, vote, year }}) => {
    const { state, pathname } = useLocation();

    return(<Main>
        <Container>
    <ButtonLink to ={state?.from ?? '/'}>
    <IoIosArrowRoundBack />
        Go Back</ButtonLink>
    <InfoMovie>
        <Image src={posterPath} alt={title}/>
    <div>
        <MovieInfoWrapper>
            <Title>{title}  ({year ? year: 'xxxx'})</Title>
        {vote !== 0 && <Rate>{vote}</Rate>}
        </MovieInfoWrapper>
    <H2>Overview</H2>
    {overview ? <P>{overview}</P> : 'Information is not available'}
    <H2>Genres</H2>
    {genres ? <P>{genres}</P> : 'Information is not available'}
    </div>
</InfoMovie>
<Navigate>
    <ButtonLink to ={pathname.includes('cast') ? '' : 'cast'}
    state = {{from: state?.from ?? '/'}}>
        {pathname.includes('cast') ? 'Hide Cast' : 'Show Cast'}
    </ButtonLink>
    <ButtonLink to={pathname.includes('reviews') ? '' : 'reviews'}
    state = {{from: state?.from ?? '/'}}>
        {pathname.includes('reviews') ? 'Hide Reviews' : 'Show Reviews'}
    </ButtonLink>
</Navigate>
<Suspense fallback={<Loader/>}>
    <Outlet />
</Suspense>
</Container>
    </Main>

)
}
Movie.propTypes ={ 
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        posterPath: PropTypes.string,
        overview: PropTypes.string,
        genres: PropTypes.string,
        vote: PropTypes.string,
        year: PropTypes.string,
    }).isRequired
}

export default Movie;