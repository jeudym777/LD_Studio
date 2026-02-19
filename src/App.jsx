import React from 'react'
import HeroSection from './components/HeroSection';
import PackagesSection from './components/PackagesSection';
import Footer from './components/Footer';

function App() {

  return (
    <div className="app bg-[#181818] min-h-screen flex flex-col justify-between">
      <HeroSection />
      <PackagesSection />
      <Footer />
    </div>
  )
}

export default App
