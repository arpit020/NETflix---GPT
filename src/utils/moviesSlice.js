import { createSlice  } from "@reduxjs/toolkit";
import { act } from "react";


const moviesSlice = createSlice({

    //name of slice
    name:'movies',

    //initialState of movies
    initialState: {
        nowPlayingMovies : null,
        trailerVideo : null,
        popularMovies : null,
        topRatedMovies : null,
        topRatedTVSeries : null
    },

    //actions on movies
    reducers : {
        addMovies : (state,action) => {
            state.nowPlayingMovies = action.payload;
        },

        addTrailer : (state,action) => {
            state.trailerVideo = action.payload;
        },

        addPopularMovies : (state,action) => {
            state.popularMovies = action.payload;
        }
        ,

        addTopRatedMovies : (state,action) => {
            state.topRatedMovies = action.payload;
        },

        addTopRatedTVSeries : (state,action) => {
            state.topRatedTVSeries = action.payload;
        }
    },
});


export const { addMovies , addTrailer , addPopularMovies , addTopRatedMovies , addTopRatedTVSeries } = moviesSlice.actions;
export default moviesSlice.reducer;