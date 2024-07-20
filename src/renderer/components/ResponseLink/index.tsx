import { IconOutlineGlobe } from "../Icons/IconOutlineGlobe"
import { motion } from "framer-motion"
import "./style.css"
import { useThemeContext } from "../../contexts/ThemeContext"

const ResponseLink = ({ link="https://minecraft.com" } : { link?: string}) =>{
    const { theme } = useThemeContext()

    return (
        <motion.div className="response-link">
            <a className={`link ${theme === "light" ? "dark" : "light"}`} target="_blank" href={link}>Link</a>
            <IconOutlineGlobe />
        </motion.div>
    )
}

export default ResponseLink