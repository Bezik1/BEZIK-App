import { IoMdSend } from "react-icons/io";
import { HiMiniCommandLine } from "react-icons/hi2";
import { RiFileInfoFill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css'
import Loading from "../Loading";
import SpeechRecognizer from "../SpeechRecognizer";
import { useCommandContext } from "../../contexts/CommandContext";
import Background from "../Background";


const SERVER_URL = "http://localhost:8000/command"

const UI = () =>{
  const [command, setCommand] = useState<string>('')
  const { operation, setOperation, status, setStatus, loading, setLoading } = useCommandContext()

  useEffect(() =>{
    const handleKeyPress = (e: KeyboardEvent) =>{
      if(e.key === "Enter") handleClick()
    }

    window.addEventListener("keydown", handleKeyPress)

    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [command])

  const handleClick = async () => {
    try {
      if(command.length === 0) {
        setOperation("Empty Command")
        setStatus(400)
        return;
      }

      setLoading(true)
      const res = await axios.get(`${SERVER_URL}/${command}`);

      setLoading(false)

      setStatus(res.data.status)
      setOperation(res.data.message)
    } catch (error) {
      setLoading(false)
      setStatus(500)
      setOperation(String(error))
    }
  }

  return (
    <div className='ui'>
      <h1>
        <div className="marked">BEZIK</div>Model
      </h1>
      <SpeechRecognizer />
      <div className='command-form'>
        <HiMiniCommandLine className="terminal-icon"/>
        <input contentEditable={false} placeholder="Enter Command" className='input' onChange={e => setCommand(e.target.value)}/>
        <IoMdSend onClick={handleClick} className='btn'/>
      </div>
      <div className="status-container">
        <AiFillFileText  className="operation"/>
        <div className="line">
          {!loading ? <div className="status-text">{operation}</div> : <Loading className="status-text"/>}
        </div>
      </div>
      <div className="status-container">
        <RiFileInfoFill className="status"/> 
        <div className="line">
          {!loading ? <div className="status-text">Status: <div className={`${status === 200 ? "good-response" : "bad-response"}`}>{status}</div></div> : <Loading className="status-text"/>}
        </div>
      </div>
    </div>
  );
}

export default UI
