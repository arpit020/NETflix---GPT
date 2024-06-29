import Header from "./Header";
import { BACKGROUND_IMG } from "../utils/constants";
import { useEffect, useRef, useState } from "react";
import {checkValidData } from "./../utils/validate";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword  , signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { useDispatch } from "react-redux";
import {addUser} from "../utils/userSlice";
import { useSelector } from "react-redux";

const Login = () => {
    const [isSignInForm , setIsSignInForm ] = useState(true);
    const [errorMssg,setErrorMssg] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector( (store) => store.user);

    const name = useRef("Arpit");
    const email = useRef(null);
    const password = useRef(null);

    useEffect(() => {
        if(user) {
            navigate("/browse");
        }
    });

    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleClick = () => {
        setErrorMssg(null);
        const emailValue = email.current.value;
        const passwordValue = password.current.value;
        const errorMssg = checkValidData(emailValue,passwordValue);

        if( errorMssg ) {
            setErrorMssg(errorMssg);
            return;
        }

        if( !errorMssg ) {

            if(!isSignInForm) {
                createUserWithEmailAndPassword(auth,emailValue,passwordValue)
                .then((userCredential) => {

                    //const user = userCredential.user;
                    

                    updateProfile(auth.currentUser, {
                        displayName: name?.current?.value
                    }).then(() => {
                        const user = auth.currentUser;
                        dispatch( addUser ({ uid:user.uid , email:user.email , displayName : user.displayName }));
                        //navigate("/browse");
                    }).catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setErrorMssg(errorCode +" " + errorMessage);
                    });
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMssg(errorCode +" " + errorMessage);
                  });
            } else {
                signInWithEmailAndPassword(auth, emailValue, passwordValue)
                .then((userCredential) => {
                    //const user = userCredential.user;
                    //navigate("/browse");
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
                <img  alt="background-image" className="opacity-50"  src={BACKGROUND_IMG}></img>
            </div>

            <form  onSubmit={(e)=> {e.preventDefault() }} className="w-1/4  relative p-12 bg-black flex flex-col mt-40 opacity-80 text-white rounded-md">

                <div className="m-2 " style={{fontSize:'2rem',fontWeight:'700',color:'#FFFFFF'}}>
                    { isSignInForm ? 'Sign In': 'Sign Up'}</div>
                
                {!isSignInForm && <input ref={name} className="p-4 m-4 rounded-md bg-gray-700"   type="text" placeholder="Full Name"></input>}

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