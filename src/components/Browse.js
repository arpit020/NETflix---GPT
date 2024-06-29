import useFetchMovies from "../utils/useFetchMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";

const Browse = () => {

    useFetchMovies();

    return(
        <div>
            <Header />
            <MainContainer />
        </div>
    )
};

export default Browse;