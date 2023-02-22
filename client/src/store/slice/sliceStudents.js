import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getStudent, insertStudent } from "../../api/student.api";

export const fetchGetStudent = createAsyncThunk(
    'student/fetchGetStudent',
    async()=>{
        try {
            const res = await getStudent()
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
)

export const fetchInsertStudent = createAsyncThunk(
    'student/fetchInsertStudent',
    async(values)=>{
        try {
            const res = await insertStudent(values)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }
)

const studentSlice = createSlice({
    name: "student",
    initialState:{
        student: []
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchGetStudent.fulfilled, (state,actions)=>{
            state.student = [...actions.payload]
        })
        builder.addCase(fetchInsertStudent.fulfilled,(state,actions)=>{
            state.student = [...state.student, actions.payload]
        })
    }
})

export default studentSlice.reducer