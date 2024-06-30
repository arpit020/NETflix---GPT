import { useRef } from "react";
import { GEMINI_KEY } from "../utils/constants";
import axios from 'axios';

const GPTSearchBar = () => {

  const searchValue = useRef();
  const handleGPTSearch = () => {
    const search = searchValue?.current?.value;
    geminiSearch(search);
  }

  const geminiSearch = async (text) => {
    const query = `Act as a movie recommandation system and give me some movies for the query : ${text} .
    Only give me name of 10 movies. comma seperated like the example result given ahead .Example Result : Gaddar,Solay,Don,Gol Maal , Koi Mil gya`;
    
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
    console.log(moviesList);
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