import { useState } from "react"
import { useCommandContext } from "../../contexts/CommandContext"
import { IconOutlineChat } from "../Icons/IconOutlineChat"
import { IconOutlineVolume } from "../Icons/IconOutlineVolume"
import ResponseLink from "../ResponseLink"
import { motion } from "framer-motion"
import "./style.css"
import { useThemeContext } from "../../contexts/ThemeContext"

export const ResponseInfo = () =>{
    const { links } = useCommandContext()
    const { theme } = useThemeContext()
    const { operation, transcription } = useCommandContext()

    console.log(links)

    const getText = (text: string) =>{
        if(text.length <= 15) return text
        else return text.substring(0, 13) + "..."
    }

    return (
        <motion.div className="response-info">
            <div className="overlap-3">
                <div className={`additional-info ${theme === "light" ? "light-el" : "dark-el"}`} />
                    {links.length === 0 && (
                        <motion.div className="no-additional-info">
                            There is no additional content to show 
                        </motion.div>
                    )}
                </div>
                <div className="response-links">
                        {links.map((link, i) => i < 6 && <ResponseLink link={link} />)}
                    </div>
                <div className={`overlap-4 ${theme === "light" ? "light-el" : "dark-el"}`}>
                    <div className="response-command">
                        <IconOutlineChat />
                        <div className={`command ${theme === "light" ? "dark" : "light"}`}>{getText(operation)}</div>
                    </div>
                    <div className="response">
                        <IconOutlineVolume />
                        <div className={`transcript ${theme === "light" ? "dark" : "light"}`}>{transcription !== "" 
                            ? getText(transcription)
                            : "Voice Inactive"}
                        </div>
                    </div>
                </div>
        </motion.div>
    )
}