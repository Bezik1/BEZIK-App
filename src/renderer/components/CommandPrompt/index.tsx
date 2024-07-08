import { useEffect, useState } from "react"
import { useCommandContext } from "../../contexts/CommandContext"
import { IconOutlinePaperAirplane1 } from "../../icons/IconOutlinePaperAirplane1"
import { SoundIcon } from "../Icons/SoundIcon"
import axios from "axios"
import { useCommandHistory } from "../../contexts/CommandHistoryContext"
import { motion } from "framer-motion"

const SERVER_URL = "http://localhost:8000/command"
export const CommandPrompt = () =>{
    const [currentCommand, setCurrentCommand] = useState('')
    const { setOperation, setStatus, setLoading, setServerActive, setTranscription, setLinks } = useCommandContext()
    const { historyItems, setHistoryItems } = useCommandHistory()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setCurrentCommand(e.target.value)

    useEffect(() =>{
        const handleKeyPress = (e: KeyboardEvent) =>{
          if(e.key === "Enter") handleSubmit()
        }
    
        window.addEventListener("keydown", handleKeyPress)
    
        return () => window.removeEventListener("keydown", handleKeyPress)
      }, [currentCommand])

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

            console.log(res.data.cache.links)
            setLinks(res.data.cache.links)
            setHistoryItems([{ command: res.data.operation, status: 200 }, ...historyItems])
          } catch (error) {
            setLoading(false)
            setStatus(500)
            setTranscription("")
            setOperation("Connection Error")
            setServerActive(false)
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
              setHistoryItems([{ command: res.data.operation, status: 200 }, ...historyItems])
              setStatus(res.data.status)
              setServerActive(true)
          } else {
              setServerActive(true)
              setTranscription("")
              setHistoryItems([{ command: "Unrecognized Text", status: 200 }, ...historyItems])
              setStatus(response.data.status)
              setOperation(response.data.operation)
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
            <div className="overlap-group-2">
            <input className="text-wrapper" placeholder="Enter Command" onChange={handleChange}/>
            <div onClick={handleSubmit}><IconOutlinePaperAirplane1 className="icon-outline-paper" /></div>
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