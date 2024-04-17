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
            state.isLoading = true;
        }, 

        fetchingCourses:(state, payload) => {
            state.courses = payload.cou
        }
    }
})

export const { setIsLoading, fetchingCourses } = coursesSlice.actions; 
export default coursesSlice.reducer; 