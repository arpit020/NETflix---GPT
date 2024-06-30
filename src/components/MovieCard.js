import { TMDB_CDN_IMAGE } from "../utils/constants";

const MovieCard = ({movie}) => {
    return(
        <div className="w-52 rounded-lg">
            <img className="rounded-lg" src ={TMDB_CDN_IMAGE + movie.poster_path}></img>
        </div>
    )
};

export default MovieCard;