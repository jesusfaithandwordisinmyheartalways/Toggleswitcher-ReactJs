

import React from "react";
import { useState } from "react";
import { createContext } from "react";
import '../components/theme/theme.css'


    export const ThemeContext = createContext();

    export const MainThemeProvider = ({children}) => {
        const [toggle, setToggle] = useState('light');
       
        
        const ToggleMode = () => {
          setToggle((toggleEdit) => toggleEdit === 'light' ? 'dark' : 'light');

        }
        return (
            <>
                <ThemeContext.Provider value={{ toggle, ToggleMode }}>
                    {children}
                </ThemeContext.Provider>
            </>
        )
    }