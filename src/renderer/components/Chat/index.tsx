import { useCommandContext } from "../../contexts/CommandContext"
import ResponseLink from "../ResponseLink"
import { motion } from "framer-motion"
import "./style.css"

const Chat = () =>{
    const { information, links } = useCommandContext()

    return (
        <motion.div 
            className="chat"
            // initial={{ opacity: 0, scale: 0.9 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className="info">
                {information !== "" && <h1>Informations</h1>}
                {information === "" && <div className="no-info">There are no informations to show</div>}
                <div className="info">{information}</div>
            </div>
            <div className="chat-links">
                {(links.length === 0 && information !== "") 
                    && <div className="no-chat-info">There are no links to show</div>}
                {links.map(link => <ResponseLink link={link} />)}
            </div>
        </motion.div>
    )
}

export default Chat