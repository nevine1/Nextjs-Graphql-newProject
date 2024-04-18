import { createSlice } from "@reduxjs/toolkit";

const coursesSlice = createSlice({
    name: 'courses', 
    initialState: {
        courses: [], //
        isLoading: false, //
        error: null
    }, //
    reducers:{

        setIsLoading:( state, payload ) => {
            state.isLoading = payload;
        }, 

        fetchingCourses:(state, payload) => {
            state.courses = payload;
        }
    }
})

export const { setIsLoading, fetchingCourses } = coursesSlice.actions; 
export default coursesSlice.reducer; 