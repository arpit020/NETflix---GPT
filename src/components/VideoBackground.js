import {  useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

const VideoBackground = ({movieId}) => {

    const trailerKey = useSelector((store) => store.movies?.trailerVideo);
    useTrailer(movieId);
    

    return(
        <div className="w-screen">
            <iframe className="w-screen aspect-video"
            src={"https://www.youtube.com/embed/"+ trailerKey + "?&autoplay=1&mute=1"}  
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            ></iframe>
        </div>
    )
}

export default VideoBackground;

//src="https://www.youtube.com/embed/rzOQ4_MRjoI?si=JWGJH9w9FSbW7Rxs" 
