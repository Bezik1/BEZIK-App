import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import './index.css'
import { useThemeContext } from '../../contexts/ThemeContext';

const Settings = ({ animate }: { animate: boolean }) =>{
    const { theme, setTheme } = useThemeContext()
    const settingsRef = useRef<HTMLDivElement>(null!)
    const themeRef = useRef<HTMLDivElement>(null!)

    useEffect(() =>{
        const tl = gsap.timeline()

        tl.to(settingsRef.current, {
            opacity: 1,
        })
    }, [])

    useEffect(() =>{
        if(!animate) return;

        const tl = gsap.timeline()

        tl.to(settingsRef.current, {
            opacity: 0
        })
    }, [animate])

    useEffect(() =>{
        const tl = gsap.timeline()

        tl.fromTo(themeRef.current.children, {
            opacity: 0,
            duration: 0.5,
        }, {
            delay: 0.1,
            opacity: 1,
            stagger: 0.3,
            duration: 0.5
        })
    }, [theme])

    const handleThemeChange = () =>{
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <div ref={settingsRef} className='settings'>
            <div ref={themeRef} className='settings-item' onClick={handleThemeChange}>
                {theme === 'light' 
                    ? <CiLight className='theme-ico' /> 
                    : <CiDark className='theme-ico' />
                } <div>Theme: {theme}</div>
            </div>
            <div className='settings-item'>
               <CiUser className='user-ico'/>
               Account
            </div>
        </div>
    )
}

export default Settings