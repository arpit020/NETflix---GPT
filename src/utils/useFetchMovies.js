import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovies } from "./moviesSlice";
import { TMDB_API_OPTIONS } from "./constants";


const useFetchMovies = () => {

    const dispatch = useDispatch();

    useEffect( () => {
        getNowPlayingMovies();
    } , []);

    const getNowPlayingMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',TMDB_API_OPTIONS);
        const moviesResponse = await response.json();
        dispatch(addMovies(moviesResponse));
    }
}

export default useFetchMovies;