import { createContext, useContext, useState } from "react";

type ParentProps = {
    children: React.ReactNode | React.ReactNode[]
}

type User = {
    username: string
    email: string
    password: string
}

const UserContext = createContext<{ user: User | undefined, setUser: React.Dispatch<React.SetStateAction<User | undefined>> | undefined}>({
    user: undefined,
    setUser: undefined,
})

export const UserProvider = ({ children } : ParentProps) =>{
    const [user, setUser] = useState<User>()

    return (
        <UserContext.Provider value={{user, setUser}}>
            { children }
        </UserContext.Provider>
    )
}

export const useUserContext= () =>{
    const { user, setUser } = useContext(UserContext)

    if(typeof setUser === 'undefined') 
        throw new Error('Element is outside User Provider')

    return { user, setUser }
}