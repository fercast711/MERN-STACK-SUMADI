import {useSelector} from 'react-redux'

const Table = () => {
    const {student} = useSelector(state=> state.student)
    const style_tr = "border-b border-gray-500"
    const style_col = "py-5 px-4  sm:px-1 sm:py-0 w-1/5"
  return (
    <div className="w-4/5 flex justify-center mb-9">
    <table className="  text-gray-400 overflow-x-auto max-w-4xl md:text-xs ">
      <thead className='bg-neutral-800 text-gray-300 text-left'>
        <tr className={style_tr }>
            <th scope='col' className={style_col}>Student Name</th>
            <th scope='col' className={style_col}>Date of Birth</th>
            <th scope='col' className={style_col}>Email</th>
            <th scope='col' className={style_col}>Address</th>
            <th scope='col' className={style_col}>Gender</th>

        </tr>
      </thead>
      <tbody className='bg-neutral-800'>
      {student.map(item =>(
          <tr className={style_tr}>
            <th className={`text-gray-300 text-left ${style_col}`}>{item.FirstName +" "+item.LastName}</th>
            <td className={style_col}>{item.DateBirth.split("-").reverse().join('/')}</td>
            <td className={style_col}>{item.Email}</td>
            <td className={style_col}>{item.Address}</td>
            <td className={style_col}>{item.Gender}</td> 
          </tr>
        ))}
      </tbody>
        
    </table>
    </div>
  )
}

export default Table