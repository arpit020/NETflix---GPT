import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTItle";



const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if(movies === null ) return;

    const randomNum = Math.floor((Math.random() * movies.results.length - 1));

    const mainMovie =  movies.results[randomNum];
    const { original_title , overview , id } = mainMovie;

    return(
        <div className="relative">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground  movieId={id}  />
            
        </div>
    )
};

export default MainContainer;