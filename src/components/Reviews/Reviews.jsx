import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieRewies } from "API/api";

import ReviewsInfo from "components/ReviwesInfo/ReviewsInfo";
import Loader from "components/Loader/Loader";
import { toast } from "react-toastify";
import Message from "components/Message/Message";

const Reviews = () => {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState([]);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState('');

    useEffect(() => {
        if(!movieId) return;
        const abortController = new AbortController();
        async function addMovieReviews() {
            setStatus('pending');
            try{
                 const reviewsMovie = await getMovieRewies(movieId, abortController);
                 setReviews(reviewsMovie);
                 setStatus('resolved');
            } catch (error) {
                setError(error.message);
                setStatus('rejected')
            }
        };
        addMovieReviews(movieId, abortController);
        return ()=> {
            abortController.abort();
        }
    }, [movieId]);


    useEffect(() => {
        if(error === 'canceled'){
            return;
        }
        if(error) {
            toast.error(error);
            setError('')
        }
    }, [error]);

    return (<>
    {status === 'pending' && <Loader/>}
    {status === 'resolved' && reviews.length !== 0 ? (<ReviewsInfo  reviews={reviews}/>) : (
        <Message/>
    )}
    </>
    )}

export default Reviews;
