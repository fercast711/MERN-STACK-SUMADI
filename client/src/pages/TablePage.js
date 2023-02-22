import Table from "../components/Table"
import { useEffect } from "react"
import { fetchGetStudent } from "../store/slice/sliceStudents"

export const TablePage = ({dispatch}) => {
    useEffect(()=>{
      dispatch(fetchGetStudent())
    },[])
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-neutral-900 to-neutral-700">
        <Table/> 
    </div>
  )
}
