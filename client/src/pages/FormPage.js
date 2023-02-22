import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup";
import { fetchInsertStudent } from "../store/slice/sliceStudents";
import {useNavigate} from 'react-router-dom'

export const FormPage = ({dispatch}) => {
    const navigate = useNavigate()
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center justify-center">
        <div className="w-2/5">
            <div className="bg-zinc-800 p-10 shadow-md shadow-black ">
                <Formik
                initialValues={{
                    FirstName: "",
                    LastName: "",
                    DateBirth: "",
                    Email: "",
                    Address: "",
                    Gender: ""
                }}
                validationSchema={Yup.object({
                    FirstName: Yup
                    .string()
                    .required("Plase enter your name")
                    .min(3,"Please enter a name more than 2 character")
                    .max(20,"Please enter a name less than 21 character"),
                    LastName: Yup
                    .string()
                    .required("Plase enter your lastname")
                    .min(3,"Please enter a lastname more than 2 character")
                    .max(20,"Please enter a lastname less than 21 character"),
                    DateBirth: Yup
                    .date()
                    .required("Plase enter your date of birth"),
                    Email: Yup
                    .string()
                    .email()
                    .required("Please enter you email"),
                    Address: Yup
                    .string()
                    .required("Please enter you address")
                    .min(10,"Please enter a adress more than 10 character")
                    .max(200,"Please enter a adress less than 200 character"),
                    Gender: Yup
                    .string()
                    .required("Please enter an option")
                    
                })}
                enableReinitialize
                onSubmit={(values, actions)=>{
                    dispatch(fetchInsertStudent(values))
                    navigate('/')
                    actions.resetForm()
                }}>
                    {({handleSubmit, setFieldValue, resetForm})=>(
                        <Form onSubmit={handleSubmit}>
                            <label htmlFor="FirstName" className="text-white">
                            First Name</label>
                            <Field name='FirstName'
                            placeholder='Your Name' 
                            className='px-3 py-2 focus:outline-none rounded bg-slate-600
                            text-white w-full mb-4'/>
                            <ErrorMessage name="FirstName" component="p" className="text-red-400 text-sm"/>

                            <label htmlFor="LastName" className="text-white">
                            Last Name</label>
                            <Field name='LastName'
                            placeholder='Your Name' 
                            className='px-3 py-2 focus:outline-none rounded bg-slate-600
                            text-white w-full mb-4'/> 
                            <ErrorMessage name="LastName" component="p" className="text-red-400 text-sm"/>

                            <label htmlFor="DateBirth" className="text-white">
                            Date of Birth</label>
                            <Field name='DateBirth'
                            type="date"
                            className='px-3 py-2 focus:outline-none rounded bg-slate-600
                            text-white w-full mb-4'/>
                            <ErrorMessage name="DateBirth" component="p" className="text-red-400 text-sm"/>

                            <label htmlFor="Email" className="text-white">
                            Email</label>
                            <Field name='Email'
                            placeholder='emailexample@test.com' 
                            className='px-3 py-2 focus:outline-none rounded bg-slate-600
                            text-white w-full mb-4'/>
                            <ErrorMessage name="Email" component="p" className="text-red-400 text-sm"/>

                            <label htmlFor="Address" className="text-white">
                            Address</label>
                            <Field name='Address'
                            placeholder='' 
                            component="textarea"
                            className='px-3 py-2 focus:outline-none rounded bg-slate-600
                            text-white w-full mb-4' onChange={(e)=>setFieldValue('Address', e.target.value)}/>
                            <ErrorMessage name="Address" component="p" className="text-red-400 text-sm"/>

                            <div role="group" aria-labelledby="my-radio-group" className="flex gap-5">
                            <label className="text-white flex items-center gap-2">
                                Male
                            <Field type="radio"  className="w-5 h-5" name="Gender" value="Male"  onChange={()=>setFieldValue('Gender', "Male")}/>
                            </label>
                            <label className="text-white flex items-center gap-2">
                                Female
                            <Field type="radio" className="w-5 h-5" name="Gender" value="Female"  onChange={()=>setFieldValue('Gender', "Female")}/>
                            </label>
                            </div>
                            <ErrorMessage name="Gender" component="p" className="text-red-400 text-sm"/>
                            
                            <div className="flex gap-x-2">
                                <button className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded 
                                mt-2 text-white focus:outline-none disabled:bg-indigo-400"
                                type="submit">Submit</button>
                                <button className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded 
                                mt-2 text-white focus:outline-none disabled:bg-red-400"
                                onClick={resetForm}>Cancel</button>
                            </div>
                            
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    </div>
  )
}
