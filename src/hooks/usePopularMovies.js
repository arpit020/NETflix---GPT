import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {

    const dispatch = useDispatch();
    
    useEffect( () => {
        getNowPlayingMovies();
    } , []);

    const getNowPlayingMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',TMDB_API_OPTIONS);
        const moviesResponse = await response.json();
        dispatch(addPopularMovies(moviesResponse));
    }
}

export default usePopularMovies;