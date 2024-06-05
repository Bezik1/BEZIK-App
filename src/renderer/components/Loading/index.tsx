import { IoReload } from "react-icons/io5";
import './index.css'

const Loading = ({ className } : { className?: string }) =>{
    return (
        <IoReload className={`loading-icon ${className}`}/>
    )
}

export default Loading