import { useEffect } from "react";
import { IconOutlineChip } from "../Icons/IconOutlineChip"
import { StatusInfoIcon } from "../Icons/StatusInfoIcon"
import axios from "axios";
import { useCommandContext } from "../../contexts/CommandContext";
import "./style.css"

export const ServerInfo = () =>{
    const { setLoading, setServerActive, serverAcitve, status, setStatus, operation } = useCommandContext()

    useEffect(() => {
        const getServerStatus = async () => {
            if(status !== 200) setLoading(true)

            try {
                const res = await axios.get("http://localhost:8000/server-status");
                console.log("Request");
                setServerActive(true);
                setLoading(false)
                if(status === 500 && operation === "Server Disabled") setStatus(200)
            } catch (err) {
                if(status !== 200) setServerActive(false)
            } finally {
                setLoading(false)
            }
        };

        const interval = setInterval(() => {
            getServerStatus();
        }, 3000);

        return () => clearInterval(interval);
    }, [status]);

    return (
        <div className="server-info">
            <div className="overlap-2">
                <StatusInfoIcon className="status-info-icon-instance" />
                <div className="text-wrapper-2">Status:</div>
                <div className="text-wrapper-3">{status}</div>
                <IconOutlineChip className="icon-outline-chip-instance" />
                <div className="text-wrapper-4">{status === 200 ? 'Server Active' : 'Server Disabled'}</div>
            </div>
        </div>
    )
}