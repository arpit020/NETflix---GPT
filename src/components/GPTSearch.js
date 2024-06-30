import { BACKGROUND_IMG } from "../utils/constants";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
    return(
        <>
            <div className="absolute top-0 bg-black -z-10 ">
                <img  alt="background-image" className="opacity-50"  src={BACKGROUND_IMG}></img>
            </div>
            <GPTSearchBar />
        </>
        
    )
};


export default GPTSearch;