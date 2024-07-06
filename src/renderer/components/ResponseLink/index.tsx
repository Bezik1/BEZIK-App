import { IconOutlineGlobe } from "../Icons/IconOutlineGlobe"
import { motion } from "framer-motion"

const ResponseLink = ({ link="https://minecraft.com" } : { link?: string}) =>{
    return (
        <motion.div className="response-link">
            <div className="link">{link}</div>
            <IconOutlineGlobe />
        </motion.div>
    )
}

export default ResponseLink