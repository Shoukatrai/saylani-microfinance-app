import React from 'react'
import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HeroSection'
import LoanCategory from '../../components/LoanCategory'
import LoanCalculator from '../../components/Calculator'
import WorkProcess from '../../components/WorkProcess'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <LoanCategory />
      <LoanCalculator />
      <WorkProcess />
      <Footer />
    </div>
  )
}

export default Home
