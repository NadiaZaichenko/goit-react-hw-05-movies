import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Main, Container, Title} from 'pages/Home/Home.styled';
import { getTrendingMovies } from 'API/api';
import MoviesGallery from 'components/MovieGallery/MovieGallery';
import Loader from 'components/Loader/Loader';





const Home = () => {
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);
    const params = useParams();


    useEffect(() => {
        const abortController = new AbortController();

       async function addTrendingMovies() {
          setStatus('pending');
        try{
            const trendingMovies = await getTrendingMovies(page, abortController);
            setMovies(trendingMovies.movies);
            setStatus('resolved');
        }
        catch (error) {
            setError(error.message);
            setStatus('rejected');
        }
       }
       addTrendingMovies();

       return() => {
        abortController.abort();
       };
    },[page]);

    useEffect(() => {
        if(params.page) {
            setPage(params.page);
            return;
        }
        setPage(1);
    }, [params.page]);

    useEffect(() => {
        if(error === 'canceled') {
          return;
        }
        if(error) {
          toast.error(error);
          setError('');
        }
      }, [error])
    


    return (<Main>
        <Container>
            {status === 'pending' && <Loader/>}
            {status === 'resolved' &&  <Title>Trending Today</Title>}
            {status === 'resolved' && <MoviesGallery movies={movies}/>}
        </Container>
    </Main>  
    )
}

export default Home;