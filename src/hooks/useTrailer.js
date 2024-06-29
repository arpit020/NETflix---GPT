import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
import { TMDB_API_OPTIONS } from "../utils/constants"; 

const useTrailer = (movieId) => {
    const dispatch = useDispatch();

    useEffect(()=> {
        getMovieVideos();
    } , [])


    const getMovieVideos = async () => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
        const response = await fetch(url , TMDB_API_OPTIONS);
        const videosResponse = await response.json();
        const filteredVideos = videosResponse.results.filter((video) => { return video.type === 'Trailer'});
        const trailer =  filteredVideos.length ? filteredVideos[0] : videosResponse.results[0];
        dispatch(addTrailer(trailer.key));
    }
}

export default useTrailer;