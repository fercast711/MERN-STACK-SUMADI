import {useSelector} from 'react-redux'

const Table = () => {
    const {student} = useSelector(state=> state.student)
    const style_th = "border-double border-4 border-gray-500 p-2 md:p-0  "
    const style_td = "border-double border-4 border-gray-500 p-2 md:p-0 w-1/5 sm:w-0 "
  return (
    <div className="w-3/4 md:px-2  md:container flex justify-center">
    <table className="border-double border-4 border-gray-500  text-gray-400  md:text-xs">
      <thead className='bg-neutral-900  text-gray-300'>
        <tr>
            <th className={style_th}>Student Name</th>
            <th className={style_th}>Date of Birth</th>
            <th className={style_th}>Email</th>
            <th className={style_th}>Address</th>
            <th className={style_th}>Gender</th>
        </tr>
      </thead>
      <tbody className='bg-neutral-800'>
      {student.map(item =>(
          <tr>
            <td className={style_td}>{item.FirstName +" "+item.LastName}</td>
            <td className={style_td}>{item.DateBirth}</td>
            <td className={style_td}>{item.Email}</td>
            <td className={style_td}>{item.Address}</td>
            <td className={style_td}>{item.Gender}</td> 
          </tr>
        ))}
      </tbody>
        
    </table>
    </div>
  )
}

export default Table