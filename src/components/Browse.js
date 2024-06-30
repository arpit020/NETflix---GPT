import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTopRatedTVSeries from "../hooks/useTopRatedTVSeries";
import useFetchMovies from "../utils/useFetchMovies";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";

const Browse = () => {

    const gptState = useSelector((store) => store.gpt);
    useFetchMovies();
    usePopularMovies();
    useTopRatedMovies();
    useTopRatedTVSeries();

    return(
        <div>
            <Header />
            {
                gptState.showGPTSearch ? <GPTSearch /> : 
                <>
                <div>
                    <MainContainer />
                    <SecondaryContainer />
                </div>
                </>
            }
        </div>
    )
};

export default Browse;