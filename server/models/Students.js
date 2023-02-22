import mongoose from "mongoose";
const values = {
    type: String,
    require:true,
    trim: true
}

const studentSchema = new mongoose.Schema({
    FirstName: values,
    LastName:values,
    DateBirth: values,
    Email: values,
    Address: values,
    Gender: values
})

export default mongoose.model('Student', studentSchema)