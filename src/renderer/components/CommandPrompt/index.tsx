import { useEffect, useState } from "react"
import { useCommandContext } from "../../contexts/CommandContext"
import { IconOutlinePaperAirplane1 } from "../../icons/IconOutlinePaperAirplane1"
import { SoundIcon } from "../Icons/SoundIcon"
import axios from "axios"
import { useCommandHistory } from "../../contexts/CommandHistoryContext"
import { motion } from "framer-motion"
import "./style.css"
import { useThemeContext } from "../../contexts/ThemeContext"

const SERVER_URL = "http://localhost:8000/command"
export const CommandPrompt = () =>{
    const { theme } = useThemeContext()
    const [currentCommand, setCurrentCommand] = useState('')
    const { setOperation, 
            setStatus, 
            setLoading, 
            setServerActive, 
            setTranscription, 
            setLinks,
            setInformation
    } = useCommandContext()
    const { historyItems, setHistoryItems } = useCommandHistory()
    const [submitHovered, setSubmitHovered] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setCurrentCommand(e.target.value)

    useEffect(() =>{
        const handleKeyPress = (e: KeyboardEvent) =>{
          if(e.key === "Enter") handleSubmit()
        }
    
        window.addEventListener("keydown", handleKeyPress)
    
        return () => window.removeEventListener("keydown", handleKeyPress)
      }, [currentCommand])
    
    const getFilteredText = (text: string) =>{
      return text
        .replace("Tłumaczenie z języka angielskiego-", "")
        .replace("Wikipedia", "")
        .replace("(z języka angielskiego", "")
    }

    const handleSubmit = async () =>{
        if(currentCommand.length === 0) {
            setOperation("Empty Command")
            setStatus(400)
            return;
          }

        try {
            setLoading(true)
            const res = await axios.get(`${SERVER_URL}/${currentCommand}`);
      
            setLoading(false)
            setServerActive(true)

            console.log(res.data.operation)

            setTranscription("")
            setStatus(res.data.status)
            setOperation(res.data.operation)
            
            console.log(res)
            if(res.data.cache.links) setLinks(res.data.cache.links)
            if(res.data.cache.informations) setInformation(getFilteredText(res.data.cache.informations))
              

            setHistoryItems([{ command: res.data.operation, status: 200 }, ...historyItems])
          } catch (error) {
            setLoading(false)
            setStatus(500)
            setTranscription("")
            setOperation("Connection Error")
            setServerActive(false)

            setInformation("")
            setLinks([])
            setHistoryItems([{ command: "command failed", status: 500 }, ...historyItems])
          }
    }

    const handleVoiceClick = async () =>{
      setLoading(true)

      try {
          const response = await axios.get(`http://localhost:8000/upload`)
    
          if (response.status === 200) {
              const res = await axios.get('http://localhost:8000/read');
              
              console.log(res.data.transcription)
              setOperation(res.data.operation)
              setTranscription(res.data.transcription)

              if(res.data.cache.links) setLinks(res.data.cache.links)
              if(res.data.cache.informations) setInformation(getFilteredText(res.data.cache.informations))
              
              setHistoryItems([{ command: res.data.operation, status: 200 }, ...historyItems])
              setStatus(res.data.status)
              setServerActive(true)
          } else {
              setServerActive(true)
              setTranscription("")
              setHistoryItems([{ command: "Unrecognized Text", status: 200 }, ...historyItems])
              setStatus(response.data.status)
              setOperation(response.data.operation)
              setInformation("")
              setLinks([])
          }
        } catch (error) {
              setStatus(500)
              setTranscription("")
              setServerActive(false)
              setOperation(String(error))
      }

      setLoading(false)
  }

    return (
        <div className="command-prompt">
            <div className={`overlap-group-2 ${theme === "light" ? "light-gradient" : "dark-gradient"}`}>
            <input className={`text-wrapper ${theme === "light" ? "dark" : "light"}`} placeholder="Enter Command" onChange={handleChange}/>
            <div 
              onClick={handleSubmit}
              onPointerOver={() => setSubmitHovered(true)}
              onPointerLeave={() => setSubmitHovered(false)}
            >
              <IconOutlinePaperAirplane1
                hovered={submitHovered}
                className="icon-outline-paper" 
              />
            </div>
            <div onClick={handleVoiceClick}>
              <SoundIcon
                className="sound-icon-instance"
                divClassName="sound-icon-3"
                divClassNameOverride="sound-icon-4"
                soundLineClassName="design-component-instance-node"
                soundLineClassName1="sound-icon-5"
                soundLineClassNameOverride="sound-icon-2"
                state="start"
              />
            </div>
            </div>
        </div>
    )
}