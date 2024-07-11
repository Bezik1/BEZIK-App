import { createContext, useContext, useState } from "react";

type ParentProps = {
    children: React.ReactNode | React.ReactNode[]
}

const ChatContext = createContext<{ active: boolean, setActive: React.Dispatch<React.SetStateAction<boolean>> | undefined}>({
    active: false,
    setActive: undefined,
})

export const ChatProvider = ({ children } : ParentProps) =>{
    const [active, setActive] = useState(false)

    return (
        <ChatContext.Provider value={{active, setActive}}>
            { children }
        </ChatContext.Provider>
    )
}

export const useChat= () =>{
    const { active, setActive } = useContext(ChatContext)

    if(typeof setActive === 'undefined') 
        throw new Error('Element is outside Chat Provider')

    return { active, setActive }
}