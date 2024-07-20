import { HistoryInfoCommand } from "../../icons/HistoryInfoCommand"
import { IconOutline } from "../Icons/IconOutline"
import { motion } from "framer-motion"

import "./style.css"
import { useThemeContext } from "../../contexts/ThemeContext"

export const HistoryItem = ({ command, status } : { command: string, status: number }) =>{
    const { theme } = useThemeContext()

    return (
        <motion.div 
            className={`history-item ${theme === "light" ? "dark" : "light"}`}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ type: "bounce", stiffness: 300, damping: 30 }}
        >
            <div className="overlap-group-3">
            <div className="history-item-2" />
            <div className={`history-item-text ${theme === "light" ? "dark" : "light"}`}>{command}</div>
            <div className={`command-history-2 ${theme === "light" ? "dark" : "light"}`}>{status}</div>
            <IconOutline className="icon-outline icon-outline-terminal" />
            <HistoryInfoCommand className="history-info-command" />
            </div>
        </motion.div>
    )
}