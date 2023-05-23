import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Main, Container, Title} from 'pages/Home/Home.styled';
import { getTrendingMovies } from 'API/api';
import MoviesGallery from 'components/MovieGallery/MovieGallery';
import Loader from 'components/Loader/Loader';
import Pagination from 'components/Pagination/Pagination';




const Home = () => {
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState('idle');
    const [totalPages, setTotalPages] = useState(0);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);

    const navigate = useNavigate();
    const params = useParams();


    useEffect(() => {
        const abortController = new AbortController();

       async function addTrendingMovies() {
          setStatus('pending');
        try{
            const trendingMovies = await getTrendingMovies(page, abortController);
            setMovies(trendingMovies.movies);
            setStatus('resolved');
            setTotalPages(trendingMovies.totalPages);
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
    

    const changePage = currentPage => {
        navigate(`/${currentPage}`);
        setPage(currentPage);
    }


    return (<Main>
        <Container>
            {status === 'pending' && <Loader/>}
            {status === 'resolved' &&  <Title>Trending Today</Title>}
            {status === 'resolved' && <MoviesGallery movies={movies}/>}
            {status === 'resolved' && (
            <Pagination
            page={page}
            totalPages={totalPages}
            changePage={changePage}
            />
            )}
        </Container>
    </Main>  
    )
}

export default Home;