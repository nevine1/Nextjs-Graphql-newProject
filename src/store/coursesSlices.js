import { createSlice } from "@reduxjs/toolkit";

const coursesSlice = createSlice({
    name: 'courses', 
    initialState: {
        courses: [], //
        isLoading: false, //
        error: null
    }, //
    reducers:{
        setIsLoading:{state} =>{
            state.isLoading = true;
        }
    }
})

export const { setIsLoading } = coursesSlice.actions; 
export default courseSlice.reducer; 