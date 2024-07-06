import { useCommandContext } from "../../contexts/CommandContext"
import { IconOutlineChat } from "../Icons/IconOutlineChat"
import { IconOutlineVolume } from "../Icons/IconOutlineVolume"
import ResponseLink from "../ResponseLink"
import { motion } from "framer-motion"

export const ResponseInfo = () =>{
    const { operation, transcription } = useCommandContext()

    const getText = (text: string) =>{
        if(text.length <= 15) return text
        else return text.substring(0, 13) + "..."
    }

    return (
        <motion.div className="response-info">
            <div className="overlap-3">
                <div className="additional-info" />
                    {/* <ResponseLink /> */}
                </div>
                <div className="overlap-4">
                    <div className="response-command">
                        <IconOutlineChat />
                        <div className="command">{getText(operation)}</div>
                    </div>
                    <div className="response">
                        <IconOutlineVolume />
                        <div className="transcript">{transcription !== "" 
                            ? getText(transcription)
                            : "Voice Inactive"}
                        </div>
                    </div>
                </div>
        </motion.div>
    )
}