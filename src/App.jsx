import React from 'react'
import RegistrationForm from './Components/RegistrationForm'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
const App = () => {
  return (
 <>
  <Router>
    <Routes>
      <Route path='/' element={<RegistrationForm/>}/>
    </Routes>
  </Router>
 </>
  )
}

export default App
