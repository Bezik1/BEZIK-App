import { useEffect, useState } from "react";
import { FaMicrophone } from "react-icons/fa6"
import { GiSoundWaves } from "react-icons/gi"
import { IoMdSend } from "react-icons/io"
import { useSpeechRecognition } from "../../hooks/useSpeechRecognition";
import axios from "axios";
import { useCommandContext } from "../../contexts/CommandContext";

const SpeechRecognizer = () =>{
    const [record, setRecord] = useState(false)
    const { setOperation, setStatus } = useCommandContext()


    const handleClick = async () =>{
        setRecord(true)

        try {
            const response = await axios.get(`http://localhost:8000/upload`)
      
            if (response.status === 200) {
                const res = await axios.get('http://localhost:8000/read');
                
                console.log(res.data.transcription)
                setOperation(res.data.operation)
                setStatus(res.status)
                setRecord(false)
            } else {
                console.error('File upload failed');
                setStatus(response.status)
            }
          } catch (error) {
                console.error('Error uploading file:', error);
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