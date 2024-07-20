import { motion } from "framer-motion"
import { useThemeContext } from "../../../contexts/ThemeContext"

export const HomeIcon = ({ className, hovered } : { className?: string, hovered: boolean }) =>{
    const { theme } = useThemeContext()
    
    return (
        <motion.svg 
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" 
            strokeWidth={1} 
            stroke={theme === "light" ? "#000" : "#fff"}
            className={`size-6 ${className}`}
        >
            <motion.path
                initial={{ pathLength: 1 }}
                animate={{ pathLength: hovered ? [0, 1] : 1 }}
                key={hovered ? "hovered-terminal" : "not-hovered-terminal"}
                transition={{ duration: 0.75, ease: "easeInOut" }}
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" 
            />
        </motion.svg>
    )
}