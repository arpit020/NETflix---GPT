import Header from "./Header";
import { BACKGROUND_IMG } from "../utils/constants";
import { useState } from "react";


const Login = () => {
    const [isSignInForm , setIsSignInForm ] = useState(true);

    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm);
    }

    return(
        <div className="flex justify-center align-middle">
            <Header />
            <div className="absolute top-0 bg-black ">
                <img className="opacity-50"  src={BACKGROUND_IMG}></img>
            </div>
            <form className="w-1/4  relative p-12 bg-black flex flex-col mt-40 opacity-80 text-white rounded-md">
                <div className="m-2 " style={{fontSize:'2rem',fontWeight:'700',color:'#FFFFFF'}}>
                    { isSignInForm ? 'Sign In': 'Sign Up'}</div>
                
                {!isSignInForm && <input  className="p-4 m-4 rounded-md bg-gray-700"   type="text" placeholder="Full Name"></input>}

                <input  className="p-4 m-4 rounded-md bg-gray-700"   type="text" placeholder="Email or mobile number"></input>
                
                <input  className="p-4 m-4 rounded-md bg-gray-700" type="password" placeholder="Password"></input>
                
                <button className="p-2 m-4 bg-red-700 rounded-md flex justify-center text-white opacity-100 " style={{textAlign:'center'}} >
                    { isSignInForm ? 'Sign In' : 'Sign Up'}</button>

                <p className="p-4 cursor-pointer" onClick={ toggleSignIn }>
                    {isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign In Now.'}</p>

            </form> 
        </div>
    )
}

export default Login;