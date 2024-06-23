import { useEffect, useRef, useState } from "react";
import { FaMicrophone } from "react-icons/fa6"
import axios from "axios";
import { useCommandContext } from "../../contexts/CommandContext";
import './index.css'
import gsap from "gsap";

const SpeechRecognizer = () =>{
    const soundIconRef = useRef<HTMLDivElement>(null!)
    const tl  = useRef(gsap.timeline({ repeat: -1 })).current
    const [record, setRecord] = useState(false)
    const [hover, setHover] = useState(false)
    const { setOperation, setStatus, setLoading, setServerActive } = useCommandContext()

    useEffect(() =>{
        const handleKeyPress = (e: KeyboardEvent) =>{
        const activeElement = document.activeElement as HTMLElement | null;
          if(e.key === "r" && activeElement?.tagName !== 'INPUT') handleClick()
        }
    
        window.addEventListener("keydown", handleKeyPress)
    
        return () => window.removeEventListener("keydown", handleKeyPress)
      }, )


    const animate = () =>{

        tl.fromTo(soundIconRef.current.children, {
            scaleY: 1.5,
        }, {
            stagger: 0.2,
            scaleY: 1,
            duration: 0.2,
            ease: "power1.inOut",
        }).to(soundIconRef.current.children, {
            scaleY: 1.5,
            stagger: 0.2,
            duration: 0.2,
            ease: "power1.inOut",
        })
        tl.pause()
    }

    useEffect(() =>{
        animate()
    }, [soundIconRef])

    const handleClick = async () =>{
        setRecord(true)
        setLoading(true)
        tl.play()

        try {
            const response = await axios.get(`http://localhost:8000/upload`)
      
            if (response.status === 200) {
                const res = await axios.get('http://localhost:8000/read');
                
                console.log(res.data.transcription)
                setOperation(res.data.message)
                setStatus(res.data.status)
                setServerActive(true)
            } else {
                setServerActive(true)
                setStatus(response.data.status)
                setOperation(response.data.message)
            }
          } catch (error) {
                setStatus(500)
                setServerActive(false)
                setOperation(String(error))
        }

        setRecord(false)
        setLoading(false)
        setHover(false)
        
        tl.pause()
    }

    const handlePointerEnter = () =>{
        if(record) return; 

        setHover(true)
        tl.play()
    }

    const handlePointerLeave = () =>{
        if(record) return; 

        setHover(false)
        tl.pause()
    }

    return (
        <div className="status-container">
            <FaMicrophone className="status"/> 
            <div className="line sound-container">
                <div
                    onPointerEnter={handlePointerEnter}
                    onPointerLeave={handlePointerLeave}
                    onClick={handleClick} 
                    ref={soundIconRef} 
                    className={`sound-icon ${(record || hover) ? "active-sound-icon" : ""}`}
                >
                    <div className={`sound-line ${(record || hover) && 'white-sound-line'} h-10`} />
                    <div className={`sound-line ${(record || hover) && 'white-sound-line'} h-15`} />
                    <div className={`sound-line ${(record || hover) && 'white-sound-line'} h-20`} />
                    <div className={`sound-line ${(record || hover) && 'white-sound-line'} h-10`} />
                    <div className={`sound-line ${(record || hover) && 'white-sound-line'} h-25`} />
                    <div className={`sound-line ${(record || hover) && 'white-sound-line'} h-15`} />
                    <div className={`sound-line ${(record || hover) && 'white-sound-line'} h-25`} />
                    <div className={`sound-line ${(record || hover) && 'white-sound-line'} h-15`} />
                    <div className={`sound-line ${(record || hover) && 'white-sound-line'} h-10`} />
                </div>
            </div>
        </div>
    )
}

export default SpeechRecognizer