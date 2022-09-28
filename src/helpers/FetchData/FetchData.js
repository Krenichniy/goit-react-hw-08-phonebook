import { Notify } from 'notiflix/build/notiflix-notify-aio';
const API_KEY = '09630d0efe652d6d61bcfe25c1802e1f';
const URL = `https://api.themoviedb.org/3`;
export  const FetchMovieFromApi = async ( value) => {
   
    try {
        const response = await fetch(`${URL}/movie/${value}?api_key=${API_KEY}&language=en-US`);
        if (!response.ok) throw new Error(response.status);
        const result = await response.json();
        return result;
    }
    catch (error){
        Notify.failure(error);
    }
}

export const fetchCast = async (value) => {
    try {
        const response = await fetch(`${URL}/movie/${value}/credits?api_key=${API_KEY}&language=en-US`);
        const result = await response.json();
        return result;
    }
    catch(error) {
        Notify.failure(error);
    }
}

export const fetchReview = async (value) => {
    try {
        const response = await fetch(`${URL}/movie/${value}/reviews?api_key=${API_KEY}&language=en-US`);
        const result = await response.json();
        return result;
    }
    catch(error) {
        Notify.failure(error);
    }
}
export const fetchAllVideoLibrary = async () => {
    try {
        const response = await fetch(`${URL}/trending/movie/week?api_key=${API_KEY}`);
        if (!response.ok) throw new Error(response.status);
        const result = await response.json();
        return result;
    }
    catch(error) {
        Notify.failure(error);
    }
}

export const fetchByQuery = async (query) => {
    try {
        const response = await fetch(`${URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-USpage=1&include_adult=false`);
         if (!response.ok) throw new Error(response.status);
        const result = await response.json();
        return result;
    }
    catch(error) {
        Notify.failure(error);
    }
}