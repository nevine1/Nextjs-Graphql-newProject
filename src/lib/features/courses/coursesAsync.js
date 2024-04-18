
import { setIsLoading } from './coursesSlice'
import { fetch } from 'graphql-request';

const fetchCourses = async (dispatch ) =>{
    dispatch(setIsLoading(true));

    try{
        const getData = await fetch('')
        
    }catch(er){

    }finally{
        dispatch(setIsLoading(false));
    }
}