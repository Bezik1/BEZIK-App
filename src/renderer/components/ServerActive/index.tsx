import axios from "axios";
import { useEffect, useState } from "react";
import { FaServer } from "react-icons/fa";
import { useCommandContext } from "../../contexts/CommandContext";
import "./index.css"

const ServerActive = () => {
    const { setLoading, setServerActive, serverAcitve, status, setStatus, operation } = useCommandContext()

    useEffect(() => {
        const getServerStatus = async () => {
            if(status !== 200) setLoading(true);

            try {
                const res = await axios.get("http://localhost:8000/server-status");
                console.log("Request");
                setServerActive(true);
                if(status === 500 && operation === "Server Disabled") setStatus(200)
            } catch (err) {
                if(status !== 200) setServerActive(false)
            } finally {
                if(status !== 200) setLoading(false)
            }
        };

        const interval = setInterval(() => {
            getServerStatus();
        }, 3000);

        return () => clearInterval(interval);
    }, [status]);

    return (
    <div className="server-status">
        <FaServer className="server-icon"/>
        <div className={`bulb-light ${serverAcitve ? 'bulb-ok' : 'bulb-error'}`} />
    </div>
)
}

export default ServerActive;