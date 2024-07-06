import { createContext, useContext, useState } from "react";

type ParentProps = {
    children: React.ReactNode | React.ReactNode[]
}
type HistoryItem = {
    command: string
    status: number
}

const CommandHistoryContext = createContext<{ historyItems: HistoryItem[], setHistoryItems: React.Dispatch<React.SetStateAction<HistoryItem[]>> | undefined}>({
    historyItems: [],
    setHistoryItems: undefined,
})

export const CommandHistoryProvider = ({ children } : ParentProps) =>{
    const [historyItems, setHistoryItems] = useState<HistoryItem[]>([])

    return (
        <CommandHistoryContext.Provider value={{historyItems, setHistoryItems}}>
            { children }
        </CommandHistoryContext.Provider>
    )
}

export const useCommandHistory= () =>{
    const { historyItems, setHistoryItems } = useContext(CommandHistoryContext)

    if(typeof setHistoryItems === 'undefined') 
        throw new Error('Element is outside Command History Provider')

    return { historyItems, setHistoryItems }
}