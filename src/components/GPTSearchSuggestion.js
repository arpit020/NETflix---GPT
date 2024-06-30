import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSearchSuggestion = () => {

    const { moviesName , moviesResults} = useSelector((store) => store.gpt);

    if(moviesName === null ) return;
    return(
        <div className="p-4 m-4 bg-black opacity-90 rounded-2xl">
            {
                moviesName.map((result , index ) =>{
                    return <MovieList key={result} title={result} movies={moviesResults[index]} />
                })
            }
            
        </div>
    )
}

export default GPTSearchSuggestion;