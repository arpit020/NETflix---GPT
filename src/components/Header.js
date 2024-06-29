import { signOut } from "firebase/auth";
import { NETFLIX_IMG_CDN, NETFLIX_USER_ICON } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Header = () => {

    const navigate = useNavigate();
    const [logoutDropDown , setLogoutDropDown] = useState(false);
    const user = useSelector( (store) => store.user);

    const handleSignOut = () => {
        signOut(auth).then(
            ()=> {
            navigate("/");
        }).catch(()=>{
            navigate("/error");
        })
    }

    const handleDropDown = () => {
        setLogoutDropDown(!logoutDropDown);
    }

    return (
    <div className="py-6 w-screen px-12 fixed z-10 flex justify-between" 
    style={{backgroundImage:'linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)'}} >
        <div>
            <img className="w-44" style={{color:'red'}} src={NETFLIX_IMG_CDN + 'Netflix_Logo_PMS.png'}></img> 
        </div>

        { user &&  <div className="my-auto relative">
            <div className="flex">
                <img className="w-10" src={NETFLIX_USER_ICON} ></img>
                <div className="px-2 my-auto text-white cursor-pointer" onClick={handleDropDown}>
                   { logoutDropDown ? '▲' : '▼' }  </div>
            </div>

            { logoutDropDown && <div className="absolute bg-black flex flex-col opacity-70 text-white rounded-md right-0 top-12 w-56 p-5">
                <div className="pb-2"> { user.displayName || "Arpit Rathi"}</div>
                <hr className="pb-2"></hr>
                <button className="text-white" onClick={handleSignOut}>Sign Out</button>
            </div> }
        </div> } 

        
    </div>
    )
};

export default Header;