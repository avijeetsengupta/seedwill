import { useState } from 'react'
import './App.css'
import Contant from './component/content'
import Header from './component/header'
import Sidebar from './component/sidebar'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Contant />
    </div>
  )
}

export default App
