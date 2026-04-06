// import React from 'react'

import Countries from "./pages/Countries"
import CTA from "./pages/CTA"
import Footer from "./pages/Footer"
import Hero from "./pages/Hero"
import Service from "./pages/Service"
import Testimonials from "./pages/Testimonials"

const App = () => {
  return (
    <div>
      <Hero />
      <Service />
      <CTA />
      <Countries />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App