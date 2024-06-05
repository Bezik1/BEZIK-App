import { createContext, useContext, useState } from "react";

type ParentProps = {
    children: React.ReactNode | React.ReactNode[]
}

const CommandContext = createContext<{ operation: string, setOperation: React.Dispatch<React.SetStateAction<string>> | undefined, status: number, setStatus: React.Dispatch<React.SetStateAction<number>> | undefined}>({
    operation: '',
    status: 200,
    setOperation: undefined,
    setStatus: undefined
})

export const CommandProvider = ({ children } : ParentProps) =>{
    const [operation, setOperation] = useState('')
    const [status, setStatus] = useState(200)

    return (
        <CommandContext.Provider value={{operation, setOperation, status, setStatus}}>
            { children }
        </CommandContext.Provider>
    )
}

export const useCommandContext= () =>{
    const { operation, setOperation, status, setStatus } = useContext(CommandContext)

    if(typeof setOperation === 'undefined' || typeof setStatus === 'undefined') throw new Error('Element is outside ReloadProvider')

    return { operation, setOperation, status, setStatus }
}