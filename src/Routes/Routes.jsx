// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../Pages/Home'
import Credentials from '../Pages/Credentials'
import Projects from '../Pages/Projects'
import GFonts from '../Pages/GFonts'
import Services from '../Pages/Services'
import Profiles from '../Pages/Profiles'
import Contact from '../Pages/Contact'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/home" element={<Home />} />
      <Route path="/credentials" element={<Credentials />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/gfonts" element={<GFonts />} />
      <Route path="/services" element={<Services />} />
      <Route path="/profiles" element={<Profiles />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
