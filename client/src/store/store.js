import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./slice/sliceStudents";

export default configureStore({
    reducer:{
        student: studentReducer
    }
})