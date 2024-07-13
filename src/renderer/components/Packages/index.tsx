import { useEffect, useState } from "react"
import { useCommandContext } from "../../contexts/CommandContext"
import { PackageStatusIcon } from "../Icons/PackageStatusIcon"
import axios from "axios"
import { PackagesGetIcon } from "../Icons/PackagesGetIcon"
import { ServerRunIcon } from "../Icons/ServerRunIcon"
import "./style.css"

const Packages = () =>{
    const [packagesMatch, setPackagesMatch] = useState(false)
    const [packages, setPackages] = useState<string[]>([])
    const [requiredPackages, setRequiredPackages] = useState<string[]>([])
    const { setLoading, serverAcitve, setServerActive } = useCommandContext()

    const checkRequiredPackages = async () =>{
        try {
            const res = await axios.get('http://localhost:8000/requirements/');
            if(res.data.status === 200) {setRequiredPackages(res.data.data); setServerActive(true) }
            console.log(requiredPackages)
        } catch(err) {
            console.log(err)
        }
    }

    const checkPackages = async () =>{
        setLoading(true)
        try {
            const res = await axios.get('http://localhost:8000/installed-packages/');
            if(res.data.status === 200) { setPackages(res.data.data); setServerActive(true) }
            console.log(requiredPackages)
        } catch(err) {
            console.log(err)
        }
        setLoading(false)
    }

    useEffect(() =>{
        checkRequiredPackages()
    }, [])

    useEffect(() =>{
        checkPackages()
    }, [])

    useEffect(() =>{
        if(requiredPackages.length === 0 || packages.length === 0) return;
        let matched = true

        requiredPackages.forEach(requiredPackage => {
            if(!packages.includes(requiredPackage)) matched = false
        })
        
        setPackagesMatch(matched)
    }, [requiredPackages, packages])

    const installPackages = async () => {
        if(packagesMatch) return;

        try {
            setLoading(true)
            window.electron.ipcRenderer.once('ipc-install', (arg: any) => {
                setLoading(false)
                checkPackages()
                
            });
            window.electron.ipcRenderer.sendMessage('ipc-install');
        } catch (err) {
          console.error(err);
        }
      };

      const runServer = async () => {
        if(serverAcitve) return;
        try {
            setLoading(true)
            window.electron.ipcRenderer.once('ipc-run', (arg: any) => {
                setLoading(false)
                setServerActive(true)
                checkPackages()
                
            });
            window.electron.ipcRenderer.sendMessage('ipc-run');
        } catch (err) {
          console.error(err);
        }
      };

    return (
        <div className="packages">
            <div className="packages-life">
                <div className="packages-status">
                    <div className="package-status-el">
                        <PackageStatusIcon className="packages-status-icon"/>
                        <div className="package-status-text">Packages {packagesMatch ? "Installed" : "Missing"}</div>
                    </div>
                    <div className={packagesMatch ? "packages-status-btn-inactive" : "packages-status-btn"} onClick={installPackages}>
                        <PackagesGetIcon className="packages-status-icon" />
                        <div className="package-status-text">Install Packages</div>
                    </div>
                </div>
                <div className="package-run-container">
                    <div className="package-status-el">
                        <PackageStatusIcon className="packages-status-icon"/>
                        <div className="package-status-text">Server {serverAcitve ? "Active" : "Inactive"}</div>
                    </div>
                    <div className={serverAcitve ? "packages-status-btn-inactive" : "packages-status-btn"} onClick={runServer}>
                        <ServerRunIcon className="package-run-icon" />
                        <div className="package-status-text">Run Server</div>
                    </div>
                </div>
            </div>
            <div className="packages-list">
                <div className="packages-list-overlap">
                    <header className="package-list-header">Installed Packages</header>
                    <div className="package-line" />
                    <div className="packages-list-container">
                        {packages.map((p, i) => (
                            <div className="package-el">
                                {i+1}. {p.split("==")[0].substring(0, 14)}{p.length > 14 && "..."}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Packages