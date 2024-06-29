import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import {addUser, removeUser} from "../utils/userSlice";

const Body = () => {

    const dispatch = useDispatch();
    

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element: <Login  />
        },
        {
            path:"/browse",
            element: <Browse />
        } ,
        
    ]);


    useEffect( () => {

        onAuthStateChanged(auth, (user) => {
            if( user ) {
                dispatch( addUser ({ uid:user.uid , email:user.email , displayName : user.displayName }));
            } else {
                dispatch(removeUser());
            }
        });

    } , [] );


    return(
        <div >
            <RouterProvider router={appRouter} />
        </div>
    )


};

export default Body;