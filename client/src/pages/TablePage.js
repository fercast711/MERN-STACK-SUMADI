import Table from "../components/Table"
import { useEffect } from "react"
import { fetchGetStudent } from "../store/slice/sliceStudents"

export const TablePage = ({dispatch}) => {
    useEffect(()=>{
      dispatch(fetchGetStudent())
    },[])
  return (
    <div className="min-h-screen flex-col flex items-center justify-center gap-y-4 bg-gradient-to-r from-neutral-900 to-neutral-700">
        <h1 className="md:text-xl text-3xl text-gray-100">Student List</h1>
        <Table/> 
        
    </div>
  )
}
