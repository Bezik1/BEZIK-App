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
import { ThemeIcon } from "../Icons/ThemeIcon";
import { useThemeContext } from "../../contexts/ThemeContext";
import { IconOutline } from "../Icons/IconOutline";
import { useChat } from "../../contexts/ChatContext";
import { HomeIcon } from "../Icons/HomeIcon";
import { PackagesIcon } from "../Icons/PackagesIcon";

export const Navbar = () => {
    const { active, setActive } = useChat()
    const { status } = useCommandContext();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [microphoneAccess, setMicrophoneAccess] = useState(false);
    const { theme, setTheme } = useThemeContext()

    const [themeIconHovered, setThemeIconHovered] = useState(false)
    const [terminalIconHovered, setTerminalIconHovered] = useState(false)
    const [packagesIconHovered, setPackagesIconHovered] = useState(false)
    const [homeIconHovered, setHomeIconHovered] = useState(false)

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
        <div className="navbar">
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
            
            <motion.div
                className="side-menu"
                initial={{ x: "-100%" }}
                animate={{ x: isMenuOpen ? 0 : "-100%" }}
                transition={{ stiffness: 300, damping: 30 }}
            >
                <div className="menu-content">
                    <div 
                        className="menu-el"
                        onPointerOver={() => setThemeIconHovered(true)}
                        onPointerLeave={() => setThemeIconHovered(false)}
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    >
                        <div className="menu-icon">
                            <ThemeIcon theme={theme} hovered={themeIconHovered}/>
                        </div>
                        <p>Theme</p>
                    </div>
                    <div className="menu-el"
                        onPointerOver={() => setHomeIconHovered(true)}
                        onPointerLeave={() => setHomeIconHovered(false)}
                        onClick={() => setActive('home')}
                    >
                        <div className="menu-icon">
                            <HomeIcon 
                                className="menu-icon" 
                                hovered={homeIconHovered}
                            />
                        </div>
                        <p>Home</p>
                    </div>
                    <div className="menu-el"
                        onPointerOver={() => setTerminalIconHovered(true)}
                        onPointerLeave={() => setTerminalIconHovered(false)}
                        onClick={() => setActive('informations')}
                    >
                        <div className="menu-icon">
                            <IconOutline
                                className="menu-icon" 
                                hovered={terminalIconHovered}
                                stokeWidth={1}
                            />
                        </div>
                        <p>Informations</p>
                    </div>
                    <div className="menu-el"
                        onPointerOver={() => setPackagesIconHovered(true)}
                        onPointerLeave={() => setPackagesIconHovered(false)}
                        onClick={() => setActive('packages')}
                    >
                        <div className="menu-icon">
                            <PackagesIcon
                                className="menu-icon" 
                                hovered={packagesIconHovered}
                            />
                        </div>
                        <p>Packages</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};