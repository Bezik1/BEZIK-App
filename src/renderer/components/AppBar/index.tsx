import { IoIosSettings } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { LuMinus } from "react-icons/lu";
import './index.css'
import ServerActive from "../ServerActive";
import MicrophoneActive from "../MicrophoneActive";
import LOGO_PAPTH from "../../assets/icon.png"
import { useEffect, useState } from "react";
import Settings from "../Settings";

const AppBar = () =>{
    const [settingsActive, setSettingsActive] = useState(false)
    const [animate, setAnimate] = useState(true)

    const handleClose = () =>{
        window.electron.ipcRenderer.sendMessage("ipc-close")
    }
    
    const handleMinimize = () =>{
        window.electron.ipcRenderer.sendMessage("ipc-minimize")
    }

    const handleSettingsClick = () =>{
        if(!animate) {
            setAnimate(true)

            setTimeout(() =>{
                setSettingsActive(!settingsActive)
            }, 500)
        }
        else {
            setSettingsActive(!settingsActive)
            setAnimate(false)
        }
    }

    return (
        <>
        <div className="app-bar">
            <div className="status-bar">
                <img
                    className="logo" 
                    src={LOGO_PAPTH} 
                />
                <IoIosSettings className="settings-btn" onClick={handleSettingsClick}/>
                <ServerActive />
                <MicrophoneActive />
            </div>
            <div className="drag-region" />
            <div className="btns">
                <div className="app-bar-item" onClick={handleMinimize}><LuMinus className="minimize"/></div>
                <div className="app-bar-item" onClick={handleClose}><IoCloseSharp className="close" /></div>
            </div>
        </div>
        {settingsActive && <Settings animate={animate} />}
        </>
    )
}

export default AppBar