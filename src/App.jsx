import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Deskripsi from './Components/Deskripsi'
import ProblemSolution from './Components/ProblemSolution'
import Features from './Components/Features'
import Gallery from './Components/Gallery'
import Order from './Components/Order'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ProblemSolution/>
    <Features/>
    <Gallery/>
    <Order/>
    <Footer/>
    </>
  )
}

export default App