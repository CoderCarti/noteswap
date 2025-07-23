import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Homepage from './Homepage'

// Pre-auth pages
import Login from './pre-auth/Login'
import Signup from './pre-auth/Signup'
import Dashboard from './post-auth/Dashboard'

function App() {
  return (
    <Router>
      {/* Global Navbar - appears on all routes */}
      <Navbar />
      
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Homepage />} />

        {/* Pre-auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Post-auth */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App