import Header from "./Header";
import { BACKGROUND_IMG } from "../utils/constants";
import { useRef, useState } from "react";
import {checkValidData } from "./../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword  , signInWithEmailAndPassword} from "firebase/auth";



const Login = () => {
    const [isSignInForm , setIsSignInForm ] = useState(true);
    const [errorMssg,setErrorMssg] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleClick = () => {
        const emailValue = email.current.value;
        const passwordValue = password.current.value;
        const errorMssg = checkValidData(emailValue,passwordValue);

        if( errorMssg ) {
            setErrorMssg(errorMssg);
            return;
        }

        if( !errorMssg ) {

            if(!isSignInForm) {
                //signUp Form

                createUserWithEmailAndPassword(auth,emailValue,passwordValue)
                .then((userCredential) => {

                    const user = userCredential.user;
                    console.log(user);

                }).catch((error) => {

                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMssg(errorCode +" " + errorMessage);
                    
                  });

            } else {
                signInWithEmailAndPassword(auth, emailValue, passwordValue)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMssg(errorCode +" " + errorMessage);
                });
            }

        } 
            
       
        
    }

    return(
        <div className="flex justify-center align-middle">
            <Header />

            <div className="absolute top-0 bg-black ">
                <img className="opacity-50"  src={BACKGROUND_IMG}></img>
            </div>

            <form  onSubmit={(e)=> {e.preventDefault() }} className="w-1/4  relative p-12 bg-black flex flex-col mt-40 opacity-80 text-white rounded-md">

                <div className="m-2 " style={{fontSize:'2rem',fontWeight:'700',color:'#FFFFFF'}}>
                    { isSignInForm ? 'Sign In': 'Sign Up'}</div>
                
                {!isSignInForm && <input  className="p-4 m-4 rounded-md bg-gray-700"   type="text" placeholder="Full Name"></input>}

                <input ref={email} className="p-4 m-4 rounded-md bg-gray-700"   type="text" placeholder="Email or mobile number"></input>
                
                <input ref={password} className="p-4 m-4 rounded-md bg-gray-700" type="password" placeholder="Password"></input>
                
                { errorMssg && <p className="p-2 mx-4 text-red-700 font-bold text-lg"> {errorMssg} </p> }
                
                <button className="p-2 m-4 bg-red-700 rounded-md flex justify-center text-white opacity-100 "
                 style={{textAlign:'center'}}  onClick={handleClick} >  { isSignInForm ? 'Sign In' : 'Sign Up'}</button>

                <p className="p-4 cursor-pointer" onClick={ toggleSignIn }>
                    {isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already registered? Sign In Now.'}</p>

            </form> 
        </div>
    )
}

export default Login;