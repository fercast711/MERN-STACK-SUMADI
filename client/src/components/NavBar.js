import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const NavBar = () => {
    const location = useLocation()
    const disable = "bg-slate-200 hover:bg-slate-300"
    const active = "bg-teal-200 hover:bg-teal-300"
    let styleList = ""
    let styleAdd = ""
    if(location.pathname == "/studentList"){
        styleList = active
        styleAdd = disable
    }else{
        styleList = disable
        styleAdd = active
    }
  return (
    <div className="bg-neutral-800 flex justify-between px-20 sm:px-2 py-2  w-screen fixed shadow-md shadow-black">
        <Link to="https://sumadi.net/es/" target="_blank">
            <img className="w-6" src="https://res.cloudinary.com/dnazobcrv/image/upload/v1677041014/hola/1622753175184_ybe0mn.jpg"/>
        </Link>
        
        <ul className="flex gap-x-1">
            <li>
                <Link to="/" className={`${styleAdd} px-2 py-1 text-xs`}>Add Students</Link>
            </li>
            <li>
                <Link to="/studentList" className={`${styleList} px-2 py-1 text-xs`}>Students List</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar