import { TMDB_CDN_IMAGE } from "../utils/constants";

const MovieCard = ({movie}) => {

    if(movie.poster_path === null ) return;
    return(
        <div className="w-52 rounded-lg opacity-100">
            <img className="rounded-lg" src ={TMDB_CDN_IMAGE + movie.poster_path}></img>
        </div>
    )
};

export default MovieCard;