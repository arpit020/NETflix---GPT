import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

    const movieList = useSelector((store) => store.movies);
    if( movieList === null || movieList.length === 0 ) return (<h1>No movies</h1>)
    return(
        <div className="bg-black">
            <div className="-mt-72 pl-12 z-20 relative">
                <MovieList title={"Now Playing"} movies={movieList?.nowPlayingMovies?.results}  />
                <MovieList title={"Top Rated Movies"} movies={movieList?.topRatedMovies?.results}  />
                <MovieList title={"Popular Movies"} movies={movieList?.popularMovies?.results}  />
                <MovieList title={"Top Rated TV Series"} movies={movieList?.topRatedTVSeries?.results}  />
            </div>
        </div>
    )
}


export default SecondaryContainer;