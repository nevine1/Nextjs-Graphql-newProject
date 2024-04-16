import { configureStore } from "@reduxjs/toolkit";
import { coursesReducer } from './features/courses/coursesSlices';



export const myStore = {
    reducer:{
        courses: coursesReducer,
    }
}


