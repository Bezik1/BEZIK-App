import { useState } from "react"
import { useThemeContext } from "../../contexts/ThemeContext"
import { ThemeIcon } from "../Icons/ThemeIcon";
import { IconOutline } from "../Icons/IconOutline";
import { HomeIcon } from "../Icons/HomeIcon";
import { PackagesIcon } from "../Icons/PackagesIcon";
import { motion } from "framer-motion";
import { useChat } from "../../contexts/ChatContext";
import { useNavigate } from 'react-router-dom';
import "./style.css"

export const SideMenu = ({ isMenuOpen } : { isMenuOpen: boolean }) =>{
    const navigate = useNavigate();
    const { theme, setTheme } = useThemeContext()

    const [themeIconHovered, setThemeIconHovered] = useState(false)
    const [terminalIconHovered, setTerminalIconHovered] = useState(false)
    const [packagesIconHovered, setPackagesIconHovered] = useState(false)
    const [homeIconHovered, setHomeIconHovered] = useState(false)

    return (
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
                onClick={() => navigate("/")}
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
                onClick={() => navigate("/informations")}
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
                onClick={() => navigate("/packages")}
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
    )
}