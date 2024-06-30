import {  useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

const VideoBackground = ({movieId}) => {

    const trailerKey = useSelector((store) => store.movies?.trailerVideo);
    useTrailer(movieId);
    

    return(
        <div style={{width:'-webkit-fill-available' }}>
            <iframe className="w-full aspect-video pointer-events-none"
            src={"https://www.youtube.com/embed/"+ trailerKey + "?controls=0&modestbranding=0&rel=0&showinfo=0&iv_load_policy=3&autoplay=1&mute=1&"}  
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            ></iframe>
        </div>
    )
}

export default VideoBackground;

//src="https://www.youtube.com/embed/rzOQ4_MRjoI?si=JWGJH9w9FSbW7Rxs  autoplay=1&mute=1&" 
