import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
    </main>
  )
}

export default App