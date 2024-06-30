import { createSlice  } from "@reduxjs/toolkit";
import { act } from "react";


const gptSlice = createSlice({

    name:'gpt',

    initialState: {
        showGPTSearch : false,
        moviesName : null ,
        moviesResults : null ,
        gptSearch : null
     },

    reducers : {
        toggleGPTSearchView : (state,action) => {
            state.showGPTSearch = !state.showGPTSearch;
        } ,

        addGPTMovies : (state,action) => {
            const {moviesName , moviesResults } = action.payload;
            state.moviesName = moviesName;
            state.moviesResults = moviesResults
        } ,

        addGPTSearch : (state , action ) => {
            state.gptSearch = action.payload;
        }
    },
});


export const { toggleGPTSearchView , addGPTMovies , addGPTSearch} = gptSlice.actions;
export default gptSlice.reducer;