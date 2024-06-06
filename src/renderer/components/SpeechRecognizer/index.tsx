import { useEffect, useState } from "react";
import { FaMicrophone } from "react-icons/fa6"
import { GiSoundWaves } from "react-icons/gi"
import { IoMdSend } from "react-icons/io"
import { useSpeechRecognition } from "../../hooks/useSpeechRecognition";
import axios from "axios";
import { useCommandContext } from "../../contexts/CommandContext";

const SpeechRecognizer = () =>{
    const [record, setRecord] = useState(false)
    const { setOperation, setStatus, setLoading } = useCommandContext()

    useEffect(() =>{
        const handleKeyPress = (e: KeyboardEvent) =>{
        const activeElement = document.activeElement as HTMLElement | null;
          if(e.key === "r" && activeElement?.tagName !== 'INPUT') handleClick()
        }
    
        window.addEventListener("keydown", handleKeyPress)
    
        return () => window.removeEventListener("keydown", handleKeyPress)
      }, )

    const handleClick = async () =>{
        setRecord(true)
        setLoading(true)

        try {
            const response = await axios.get(`http://localhost:8000/upload`)
      
            if (response.status === 200) {
                const res = await axios.get('http://localhost:8000/read');
                
                console.log(res.data.transcription)
                setOperation(res.data.message)
                setStatus(res.data.status)
                setRecord(false)
                setLoading(false)
            } else {
                setStatus(response.data.status)
                setOperation(response.data.message)
                setLoading(false)
            }
          } catch (error) {
                setStatus(500)
                setLoading(false)
                setOperation(String(error))
          }
    }

    return (
        <div className="status-container">
            <FaMicrophone className="status"/> 
            <div className="line sound-container">
                <GiSoundWaves onClick={handleClick} className={`sound-icon ${record ? "active-sound-icon" : ""}`}/>
            </div>
        </div>
    )
}

export default SpeechRecognizer