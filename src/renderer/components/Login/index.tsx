import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import './index.css'
import { useState } from "react";
import axios from "axios";
import { useUserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const API_LINK = "http://localhost:3000/users"

type UserLogin = {
    email: string
    password: string
}

const Login = () =>{
    const navigate = useNavigate();
    const { user, setUser } = useUserContext()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordType, setPasswordType] = useState<'password' | 'text'>('password')

    const handleEyeClick = () =>{
        if(passwordType === "password") setPasswordType("text")
        else setPasswordType("password")
    }
    
    const handleSubmit = async () =>{
        try {
            console.log(email, password)
            const res = await axios.post(`${API_LINK}/login`, { email, password })
            console.log(res)
            if(res.status === 201) {
                navigate("/ui")
                setUser(res.data.data)
                console.log(user)
            }
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className='login' onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className='email'>
                <MdOutlineAlternateEmail className="email-ico"/>
                <input className='input form-input' onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="password">
                <RiLockPasswordLine className="password-ico" />
                <input className='input form-input' type={passwordType} onChange={e => setPassword(e.target.value)}/>
                {passwordType === 'password' 
                    ? <FaEye className="eye-ico" onClick={handleEyeClick}/>
                    : <FaEyeSlash className="eye-ico" onClick={handleEyeClick} />
                }
            </div>
            <button className="login-submit" onClick={handleSubmit}><IoMdSend className="submit-send"/></button>
        </div>
    )
}

export default Login