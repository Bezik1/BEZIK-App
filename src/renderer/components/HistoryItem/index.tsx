import { HistoryInfoCommand } from "../../icons/HistoryInfoCommand"
import { IconOutline } from "../Icons/IconOutline"
import { motion } from "framer-motion"

export const HistoryItem = ({ command, status } : { command: string, status: number }) =>{
    return (
        <motion.div 
            className="history-item"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ type: "bounce", stiffness: 300, damping: 30 }}
        >
            <div className="overlap-group-3">
            <div className="history-item-2" />
            <div className="history-item-text">{command}</div>
            <div className="command-history-2">{status}</div>
            <IconOutline className="icon-outline-terminal" />
            <HistoryInfoCommand className="history-info-command" />
            </div>
        </motion.div>
    )
}