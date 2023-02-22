import {useSelector} from 'react-redux'

const Table = () => {
    const {student} = useSelector(state=> state.student)
    console.log(student)
    const style_1 = "border-double border-4 border-gray-500 p-2 "
    const style_2 = "border-double border-4 border-gray-500 p-2 w-1/5"
  return (
    <div className="w-3/4  md:px-10 md:container md:m-auto">
    <table className="border-double border-4 border-gray-500  text-gray-400 bg-neutral-800 md:text-xs">
        <tr>
            <th className={style_1}>Student Name</th>
            <th className={style_1}>Date of Birth</th>
            <th className={style_1}>Email</th>
            <th className={style_1}>Address</th>
            <th className={style_1}>Gender</th>
        </tr>
        {student.map(item =>(
          <tr>
            <td className={style_2}>{item.FirstName +" "+item.LastName}</td>
            <td className={style_2}>{item.DateBirth}</td>
            <td className={style_2}>{item.Email}</td>
            <td className={style_2}>{item.Address}</td>
            <td className={style_2}>{item.Gender}</td>
          </tr>
        ))}
    </table>
    </div>
  )
}

export default Table