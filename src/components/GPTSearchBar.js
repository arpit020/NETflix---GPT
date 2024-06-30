import { useRef } from "react";
import { GEMINI_KEY, TMDB_API_OPTIONS } from "../utils/constants";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addGPTMovies, addGPTSearch } from "../utils/gptSlice";

const GPTSearchBar = () => {

  const searchValue = useRef();
  const dispatch = useDispatch();

  const handleGPTSearch = () => {
    const search = searchValue?.current?.value;
    geminiSearch(search);
  }

  const geminiSearch = async (text) => {
    
    const query = `Act as a movie recommandation system and give me some movies for the query : ${text} .
    Only give me name of 5 movies. Comma seperated like the example result given ahead .`;
    
    const response  = await axios({
      url : 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=' + GEMINI_KEY,
      method: 'POST',
      data : {
        contents : [
          {
            parts : [{text : query}]
          }
        ]
      }
    })

    const moviesList = response.data.candidates[0].content?.parts[0]?.text.split(",");
    const promiseArray = moviesList.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGPTMovies( { moviesName : moviesList , moviesResults: tmdbResults}));
    dispatch(addGPTSearch(text));
    
  }

  //search movie in TMDB

  const searchMovieTMDB = async (movie) => {

    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, TMDB_API_OPTIONS);
    const movieDetails = await data.json();
    return movieDetails.results;

  }




  return(
      <div className="flex z-20 bg-black rounded-lg" style={{width:'fit-content',margin:'100px auto 0px'}}> 
        <form  className="px-3" onSubmit={(e) => { e.preventDefault() }}>
          <input ref={searchValue} type="text" className="px-4 py-3 m-4 rounded-lg w-96" placeholder="Search for your favourite movie"></input>
          <button className="py-3 px-10 bg-red-500 text-white rounded-lg" onClick={handleGPTSearch}>Search</button>
        </form>
      </div>
  )
}

export default GPTSearchBar;