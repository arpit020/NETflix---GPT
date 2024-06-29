import { createSlice  } from "@reduxjs/toolkit";


const moviesSlice = createSlice({

    //name of slice
    name:'movies',

    //initialState of movies
    initialState: {
        nowPlayingMovies : null,
        trailerVideo : null,
    },

    //actions on movies
    reducers : {
        addMovies : (state,action) => {
            state.nowPlayingMovies = action.payload;
        },

        addTrailer : (state,action) => {
            state.trailerVideo = action.payload;
        }
    },
});


export const { addMovies , addTrailer } = moviesSlice.actions;
export default moviesSlice.reducer;