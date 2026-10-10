import { Hero } from './components/HeroSection';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/About';
import { Packages } from './components/Packages';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer'

export const App: React.FC = () => {
  return (
    <div className='min-h-screen w-full bg-slate-950 text-slate-100'>
      {/* 1. Hero Section */}
      <Navbar />
      <Hero />
      <About />
      <Packages />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App;