import { createSlice } from "@reduxjs/toolkit";

const coursesSlice = createSlice({
    name: 'courses', 
    initialState: {
        courses: [], //
        isLoading: false, //
        error: null
    }, //
    reducers:{
        setIsLoading:{state, paylaod} =>{
            setIsLoading = true;
        }
    }
})

export const { } = coursesSlice.actions; 
export default courseSlice.reducer; 