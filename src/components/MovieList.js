import MovieCard from "./MovieCard";

const MovieList = ({title,movies}) => {
    if( movies == null ) return;
    return(
        <div className="p-6">
            <h1 className="text-3xl py-6 text-white ">{title}</h1>
            <div className="flex  overflow-x-scroll">
                <div className="flex gap-2">
                {
                    movies.map((movie) =>  {
                        return(
                            <MovieCard   key={movie.title}  movie= {movie} />
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
};

export default MovieList;