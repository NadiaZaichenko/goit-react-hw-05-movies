import { useState, useEffect } from "react";
import { getMovieByQuery } from "API/api";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Main } from "./Movie.styled";

import SearchForm from "components/SearchForm/SearchFrom";
import MoviesGallery from "components/MovieGallery/MovieGallery";
import Loader from "components/Loader/Loader";
import Pagination from "components/Pagination/Pagination";


const Movie = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('query'));
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState('idle');
    const [totalPages, setTotalPages] = useState(0);
    const [notification, setNotification] = useState({ type: '', message: '' }); 
    const [page, setPage] = useState(searchParams.get('page'));

    useEffect(() => {
        if(!query) return;

        const abortController = new AbortController();

        async function addMovieByQuery () {
            setStatus('pending');
            try{
                const {movies, totalPages, totalResults} = await getMovieByQuery(query, page, abortController);
                if(totalResults === 0) {
                    setNotification({
                        type: 'error',
                        message: 'Sorry, there are no movies by your query. Try again'
                    });
                    setMovies([]);
                    setQuery(null);
                };
            setMovies(movies);
            setTotalPages(totalPages);
            setStatus('resolved')
            }
            catch (error){
                setNotification({
                    type: 'error',
                    notification: error.message
                })
                setStatus('rejected');
            }
        };
        addMovieByQuery();

        return() => {
            abortController.abort();
        };
    }, [page,query]);


    useEffect(() => {
        if(notification) {
            function handleNotification() {
                const notificationType = notification.type;
                const notificationMes = notification.message;

                if(notificationMes === 'canceled') {
                    return;
                }
                if(notificationType === 'info') {
                   toast.info(notificationMes);
                   setNotification({type: '', message: ''});
                };
                if(notificationType === 'error') {
                    toast.error(notificationMes);
                    setNotification({type: '', message: ''});
                 };
            };
            handleNotification();
        }
    }, [notification])

    const handleSubmit = value => {
       if(!value) {
        setNotification({type: 'info', message: 'Please,enter your search query'});
        return;
       }
       if(value === query) {
        setNotification({type: 'info', message: 'You are viewing movies for this query '})
        return;
       };
       setQuery(value);
       setPage(1);
       setSearchParams({query: value, page: 1});
       setNotification({type: '', message: ''});
       setStatus('idle');

    }

    const changePage = currentPage => {
        setSearchParams({query: query, page: currentPage});
        setPage(currentPage);
    };

    return (<Main>
        <SearchForm onSubmit={handleSubmit}/>
        {status === 'pending' && <Loader/>}
        {status === 'resolved' && <MoviesGallery movies={movies}/>}
        {status === 'resolved' && totalPages > 1 && 
        <Pagination
            page={page}
            totalPages={totalPages}
            changePage={changePage}
            query={query}
        />}
    </Main>

    )
}

export default Movie;