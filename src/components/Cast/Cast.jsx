import { useState, useEffect } from "react";
import {toast} from 'react-toastify'
import { useParams } from "react-router-dom";
import ActorsGallery from "components/ActorsGallery/ActorsGallery";
import { getMoviesCast } from "API/api";
import Loader from "components/Loader/Loader";

const Cast = () => { 
    const {movieId} = useParams();
    const [cast, setCast] = useState([]);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState('');

    useEffect(() => {
        if(!movieId) {
             return;
        }
        const abortController = new AbortController();
        async function addMovieCast() {
            setStatus('pending');
            try{ 
            const castMovie = await getMoviesCast(movieId, abortController);
            setCast(castMovie);
            setStatus('resolved');
            } catch(error) {
                setError(error.message);
                setStatus('rejected');
            }};
        addMovieCast(movieId, abortController);
        return() => {
            abortController.abort();
        }
    }, [movieId]);

    useEffect(() => {
        if(error === 'canceled') {
            return;
        };
        if(error ) {
            toast.error(error);
            setError('');
        }
    }, [error]);


    return (
        <>
        {status ==='pending' && <Loader/>}
        {status === 'resolved' && cast.length !== 0 && <ActorsGallery actors={cast}/>}
        </>
    )
}

export default Cast;