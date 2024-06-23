import { createContext, useContext, useState } from "react";

type ParentProps = {
    children: React.ReactNode | React.ReactNode[]
}

const CommandContext = createContext<{ operation: string, setOperation: React.Dispatch<React.SetStateAction<string>> | undefined, status: number, setStatus: React.Dispatch<React.SetStateAction<number>> | undefined, loading: boolean, setLoading: React.Dispatch<React.SetStateAction<boolean>> | undefined, serverAcitve: boolean, setServerActive: React.Dispatch<React.SetStateAction<boolean>> | undefined}>({
    operation: 'Server Disabled',
    status: 500,
    loading: false,
    setOperation: undefined,
    setStatus: undefined,
    setLoading: undefined,
    serverAcitve: false,
    setServerActive: undefined,
})

export const CommandProvider = ({ children } : ParentProps) =>{
    const [operation, setOperation] = useState('Server Disabled')
    const [status, setStatus] = useState(500)
    const [loading, setLoading] = useState(false)
    const [serverAcitve, setServerActive] = useState(false)

    return (
        <CommandContext.Provider value={{operation, setOperation, status, setStatus, loading, setLoading, serverAcitve, setServerActive}}>
            { children }
        </CommandContext.Provider>
    )
}

export const useCommandContext= () =>{
    const { operation, setOperation, status, setStatus, loading, setLoading, serverAcitve, setServerActive } = useContext(CommandContext)

    if(typeof setOperation === 'undefined' || typeof setStatus === 'undefined' || typeof setLoading === 'undefined' || typeof setServerActive === 'undefined') 
        throw new Error('Element is outside Command Provider')

    return { operation, setOperation, status, setStatus, loading, setLoading, serverAcitve, setServerActive }
}