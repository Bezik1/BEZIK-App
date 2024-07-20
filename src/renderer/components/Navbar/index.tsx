import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCommandContext } from "../../contexts/CommandContext";
import { IconOutlineMinus } from "../Icons/IconOutlineMinus";
import { IconOutlineServer } from "../Icons/IconOutlineServer";
import { IconOutlineView } from "../Icons/IconOutlineView";
import { IconOutlineWrapper } from "../Icons/IconOutlineWrapper";
import { IconOutlineX } from "../Icons/IconOutlineX";
import { LightBulb } from "../Icons/LightBulb";

import LOGO_PATH from "../../assets/img/logo.svg"

import "./style.css"
import { SideMenu } from "../SideMenu";
import { useThemeContext } from "../../contexts/ThemeContext";

export const Navbar = () => {
    const { theme } = useThemeContext()
    const { status } = useCommandContext();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [microphoneAccess, setMicrophoneAccess] = useState(false);

    useEffect(() => {
        const checkMicrophoneAccess = async () => {
            try {
                const devices = await navigator.mediaDevices.enumerateDevices();
                const hasMicrophone = devices.some(device => device.label.includes("Microphone") || device.label.includes("microphone") || device.label.includes("Mikrofon"));

                setMicrophoneAccess(hasMicrophone);
            } catch (error) {
                setMicrophoneAccess(false);
            }
        };

        navigator.mediaDevices.addEventListener("devicechange", checkMicrophoneAccess)
        
        return () => navigator.mediaDevices.removeEventListener("devicechange", checkMicrophoneAccess);
    });

    const handleClose = () => {
        window.electron.ipcRenderer.sendMessage("ipc-close");
    };

    const handleMinimalize = () => {
        window.electron.ipcRenderer.sendMessage("ipc-minimize");
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`navbar ${theme === "light" ? "light-navbar" : "dark-navbar"}`}>
            <div className="options" onClick={toggleMenu}>
                <IconOutlineView className="icon-outline-view-grid" />
            </div>
            <IconOutlineServer className="icon-outline-server-instance" />
            <div className="overlap-6">
                <IconOutlineWrapper />
                <LightBulb status={microphoneAccess ? 200 : 500} className="light-bulb-instance" />
            </div>
            <img className="logo" alt="Logo" src={LOGO_PATH} />
            <div className="drag-area" />
            <div onClick={handleClose}>
                <IconOutlineX className="icon-outline-x-instance" />
            </div>
            <div onClick={handleMinimalize}>
                <IconOutlineMinus className="icon-outline-minus-instance" />
            </div>
            <LightBulb status={status} className="light-bulb-2" />
            <SideMenu isMenuOpen={isMenuOpen} />
        </div>
    );
};