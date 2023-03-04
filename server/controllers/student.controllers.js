import createHttpError from "http-errors";
import Students from "../models/Students.js";

export const getStudents = async(req,res, next)=>{
    try {
        const students = await Students.find()
        if(!students){
            throw createHttpError(404, "Not Found");
        }
        res.json(students)
    } catch (error) {
        next(error);
    }
}

export const addStudents = async(req,res, next)=>{
    const {FirstName, LastName, DateBirth, Email, Address, Gender} = req.body;
    try {
        if(!(FirstName, LastName, DateBirth, Email, Address, Gender)){
            throw createHttpError(400, "The form must have a body completely");
        }
        const newStudent = new Students(req.body)
        await newStudent.save()
        return res.json(newStudent)
    } catch (error) {
        next(error)
    }
}