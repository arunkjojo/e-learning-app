import React, { useState, useContext, createContext, useEffect } from 'react'

const themes = {
    light: {
        label:'light',
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        label:'dark',
        foreground: "#ffffff",
        background: "#222222"
    }
};

const ThemeContext = createContext(themes.dark);


const ContextHooks = () => {
    const [theme, setTheme] = useState(themes.dark)
    const toggleTheme = () => {
        if(theme.label === 'light') setTheme(themes.dark)
        else if(theme.label === 'dark') setTheme(themes.light)
    }
    useEffect(()=>{
        console.log("changed theme", theme)
    }, [theme]);

    return (
        <ThemeContext.Provider value={theme}>
            <Toolbar toggleTheme={toggleTheme}/>
        </ThemeContext.Provider>
    )
}


function Toolbar(props) {
    return (
        <ThemedButton changeTheme={props.toggleTheme}/>
    );
}

function ThemedButton(props) {
    const theme = useContext(ThemeContext);
    return (
        <button style={{ background: theme.background, color: theme.foreground }} onClick={()=>props.changeTheme()}>
            I am styled by theme context!
        </button>
    );
}

export default ContextHooks