import { configureStore  } from "@reduxjs/toolkit";
import  coursesReducer  from './features/courses/coursesSlices';



export const store = configureStore({
    reducer:{
        courses: coursesReducer,
    }
})


