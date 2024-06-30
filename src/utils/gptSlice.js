import { createSlice  } from "@reduxjs/toolkit";
import { act } from "react";


const gptSlice = createSlice({

    name:'gpt',

    initialState: {
        showGPTSearch : false
     },

    reducers : {
        toggleGPTSearchView : (state,action) => {
            state.showGPTSearch = !state.showGPTSearch;
        } 
    },
});


export const { toggleGPTSearchView } = gptSlice.actions;
export default gptSlice.reducer;