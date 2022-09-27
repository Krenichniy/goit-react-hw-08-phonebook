import { Link, useSearchParams, useLocation } from 'react-router-dom';
import styles from '../../modules/Menu/menu.module.css';
import { StyledBtn } from './Movies.styled';
import { MovieSearchForm } from "../../modules/MoviesSearchForm/MoviesSearchForm";
import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Loader from 'components/Loader';
import { fetchByQuery } from 'helpers/FetchData/FetchData';
import { StyledLink, StyledMoviesList, StyledItem, StyledTitle } from '../Homepage/Homepage.styled';
import { StyledContainer } from '../../components/StyledComponent';
import noPhoto from '../../defaultImage/noPhoto.jpg'
 const Movies = () => {
    const [state, setSate] = useState([])
    // const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    const changeSearch = ({ search }) => {
        setSearchParams({search} )
        // setSearch(search)
    }
    const search = searchParams.get('search');

       useEffect(() => {
        const getSearchedMovies = async () => {
            setIsLoading(true);
            try {
                const response = await fetchByQuery(search);
                setSate(state => [ ...response.results])
            }
            catch (error) {
                Notify.failure(error);
            }
            finally {
                setIsLoading(false);
            }
           }
           if(search) getSearchedMovies();
    }, [search]);

     const movies = state?.map(({id, poster_path, title, name}) => {
        return <StyledItem key={id}>
            <StyledLink state={{from:location}} to={`/movies/${id}`}>
                {poster_path ?
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} width="200" height="250" />
                    :<img src={noPhoto} alt={title} width={200} height={250} />
                }
                <StyledTitle > {title || name}</StyledTitle>
            </StyledLink>
        </StyledItem>
     });
    
    return (
        <StyledContainer>
            <StyledBtn>
                <Link to={'/'} className={styles.link}>Go Back</Link>
            </StyledBtn>
            <MovieSearchForm onSubmit={changeSearch} />
               <StyledMoviesList >
                {isLoading && <Loader/> }
                {movies}
            </StyledMoviesList>
        </StyledContainer>
    )
}

export default Movies;