import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Loader from 'components/Loader';
import { fetchCast } from "helpers/FetchData/FetchData";
import { StyledCastConatiner, StyledCastItem } from './StyledComponent';
import noPhoto from '../defaultImage/noPhoto.jpg'
const API_KEY = '09630d0efe652d6d61bcfe25c1802e1f';
 const Cast = () => {
    const { id } = useParams();
    const [state, setSate] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

        useEffect(() => {
        const getCast = async () => {
            setIsLoading(true);
            try {
                const response = await fetchCast(id);
                setSate(state => [...state, ...response.cast])
            }
            catch (error) {
                Notify.failure(error);
            }
            finally {
                setIsLoading(false);
            }
        }
        getCast();

        }, [id ]);
    
    const casts=state?.map(el => {
        return <StyledCastItem key={el.id}>
          <div>
                {el.profile_path ?
                    <img src={`https://image.tmdb.org/t/p/w300/${el.profile_path}?api_key=${API_KEY}`} alt={el.name} width={200} height={250} />
                    :<img src={noPhoto} alt={el.name} width={200} height={250} />
                }
          </div>
        <p>{el.name}</p>
        <p>Character : { el.character}</p> 
      </StyledCastItem>
})
    return (
        <>
            {isLoading && <Loader />}
            <StyledCastConatiner>{casts}</StyledCastConatiner>
        </>
    )
}

export default Cast;