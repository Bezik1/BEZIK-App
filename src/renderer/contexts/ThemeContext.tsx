import { createContext, useContext, useState } from "react";

type ParentProps = {
    children: React.ReactNode | React.ReactNode[]
}

const ThemeContext = createContext<{ theme: 'light' | 'dark', setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>> | undefined}>({
    theme: 'light',
    setTheme: undefined,
})

export const ThemeProvider = ({ children } : ParentProps) =>{
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            { children }
        </ThemeContext.Provider>
    )
}

export const useThemeContext= () =>{
    const { theme, setTheme } = useContext(ThemeContext)

    if(typeof setTheme === 'undefined') 
        throw new Error('Element is outside Theme Provider')

    return { theme, setTheme }
}