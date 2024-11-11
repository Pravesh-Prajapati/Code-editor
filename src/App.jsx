import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import EditorProvider from './context/EditorContext'
import Output from './components/Output'

function App() {

  return (
    <>
      <EditorProvider>
        <Home />
        <Output/>
      </EditorProvider>
    </>
  )
}

export default App
