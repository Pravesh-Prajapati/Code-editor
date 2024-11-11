import React, { createContext, useContext, useState } from 'react'

export let CodeContext = createContext()
function EditorProvider({ children }) {
    let [html, sethtml] = useState(" ")
    let [css, setcss] = useState(" ")
    let [js, setjs] = useState(" ")
    return (
        <>
            <CodeContext.Provider value={{html,sethtml,css,setcss,js,setjs}}>
                {children}
            </CodeContext.Provider>
        </>
    )
}

export default EditorProvider