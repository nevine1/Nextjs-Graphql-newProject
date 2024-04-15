import { configureStore } from "@reduxjs/toolkit";
import { coursesReducer } from './coursesSlices'

const store = {
    reducers:{
        courses: coursesReducer,
    }
}