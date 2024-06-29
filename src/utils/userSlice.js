import { createSlice , current } from "@reduxjs/toolkit";


const userSlice = createSlice({

    //name of slice
    name:'user',

    //initialState of user
    initialState: null,

    //actions on user
    reducers : {
        addUser : (state,action) => {
            return action.payload ;
        },

        removeUser : (state,action) => {
            return null;
        },
    }
});


export const { addUser , removeUser } = userSlice.actions;
export default userSlice.reducer;