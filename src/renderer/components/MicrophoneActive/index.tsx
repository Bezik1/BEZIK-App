import { useEffect, useState } from 'react';
import { HiMicrophone } from "react-icons/hi2";
import './index.css'

const MicrophoneActive = () => {
    const [microphoneAccess, setMicrophoneAccess] = useState(false);

    useEffect(() => {
        const checkMicrophoneAccess = async () => {
            try {
                const devices = await navigator.mediaDevices.enumerateDevices();
                const hasMicrophone = devices.some(device => device.label.includes("Microphone") || device.label.includes("microphone") || device.label.includes("Mikrofon"));

                setMicrophoneAccess(hasMicrophone);
            } catch (error) {
                setMicrophoneAccess(false);
            }
        };

        navigator.mediaDevices.addEventListener("devicechange", checkMicrophoneAccess)
        
        return () => navigator.mediaDevices.removeEventListener("devicechange", checkMicrophoneAccess);
    });

    return (
        <div className='microphone-status'>
            <HiMicrophone className='microphone-icon' />
            <div className={`bulb-light ${microphoneAccess ? 'bulb-ok' : 'bulb-error'}`} />
        </div>
    )
}

export default MicrophoneActive;