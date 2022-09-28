import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Loader from 'components/Loader';
import { fetchReview } from "helpers/FetchData/FetchData";

 const Reviews = () => {
    const { id } = useParams();
    const [state, setSate] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

        useEffect(() => {
        const getReview = async () => {
            setIsLoading(true);
            try {
                const response = await fetchReview(id);
                setSate(state => [...state, ...response.results])
            }
            catch (error) {
                Notify.failure(error);
            }
            finally {
                setIsLoading(false);
            }
        }
        getReview();

        }, [ id]);
    
    const reviews=state?.map(el => {
        return <li key={el.id}>
                    <b>Author:{el.author}</b>
                    <p>{ el.content}</p> 
                </li>
})
    return (
        <>
            {isLoading && <Loader />}
            <ul>{state.length === 0 ? 
                <div>We do not have any  reviews on this movie</div>
            : reviews}</ul>
        </>
    )
}

export default Reviews;