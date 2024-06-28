import { NETFLIX_IMG_CDN } from "../utils/constants";
const Header = () => {
    return (
    <div className="py-6 px-12 mx-32  fixed z-10 w-full">
         <img className="w-44" style={{color:'red'}} src={NETFLIX_IMG_CDN + 'Netflix_Logo_PMS.png'}></img> 
    </div>
    )
};

export default Header;