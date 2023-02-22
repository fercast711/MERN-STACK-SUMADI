import axios from "axios";

export const getStudent = async()=>{
    return await axios.get('/students')
}

export const insertStudent = async(values)=>{
    return await axios.post('/students',values)
}