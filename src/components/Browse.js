import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTopRatedTVSeries from "../hooks/useTopRatedTVSeries";
import useFetchMovies from "../utils/useFetchMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

    useFetchMovies();
    usePopularMovies();
    useTopRatedMovies();
    useTopRatedTVSeries();

    return(
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
};

export default Browse;