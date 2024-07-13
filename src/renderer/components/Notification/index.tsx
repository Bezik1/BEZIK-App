import { motion } from "framer-motion"
import "./style.css"
import { HistoryInfoCommand } from "../../icons/HistoryInfoCommand"

export const Notification = () =>{
    return (
        <motion.div
            className="notification"
            initial={{left: "-85%" }}
            // animate={{opacity: 1, y: 0 }}
            animate={{ x: ("") ? "12%" : "-85%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
        <div className="notification-info">Notification</div>
        <HistoryInfoCommand className="notification-icon" />
      </motion.div>
    )
}