import { createContext, useContext, useState } from "react";

type ParentProps = {
    children: React.ReactNode | React.ReactNode[]
}

const CommandContext = createContext<{ operation: string, setOperation: React.Dispatch<React.SetStateAction<string>> | undefined, status: number, setStatus: React.Dispatch<React.SetStateAction<number>> | undefined, loading: boolean, setLoading: React.Dispatch<React.SetStateAction<boolean>> | undefined}>({
    operation: '',
    status: 200,
    loading: false,
    setOperation: undefined,
    setStatus: undefined,
    setLoading: undefined,
})

export const CommandProvider = ({ children } : ParentProps) =>{
    const [operation, setOperation] = useState('')
    const [status, setStatus] = useState(200)
    const [loading, setLoading] = useState(false)

    return (
        <CommandContext.Provider value={{operation, setOperation, status, setStatus, loading, setLoading}}>
            { children }
        </CommandContext.Provider>
    )
}

export const useCommandContext= () =>{
    const { operation, setOperation, status, setStatus, loading, setLoading } = useContext(CommandContext)

    if(typeof setOperation === 'undefined' || typeof setStatus === 'undefined' || typeof setLoading === 'undefined') 
        throw new Error('Element is outside ReloadProvider')

    return { operation, setOperation, status, setStatus, loading, setLoading }
}