import Students from "../models/Students.js";

export const getStudents = async(req,res)=>{
    try {
        const students = await Students.find()
        res.json(students)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const addStudents = async(req,res)=>{
    try {
        const newStudent = new Students(req.body)
        await newStudent.save()
        return res.json(newStudent)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}