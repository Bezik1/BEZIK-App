import { IconOutlineGlobe } from "../Icons/IconOutlineGlobe"
import { motion } from "framer-motion"

const ResponseLink = ({ link="https://minecraft.com" } : { link?: string}) =>{
    return (
        <motion.div className="response-link">
            <a className="link" target="_blank" href={link}>Link</a>
            <IconOutlineGlobe />
        </motion.div>
    )
}

export default ResponseLink