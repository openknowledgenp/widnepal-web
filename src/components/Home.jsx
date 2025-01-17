import '../styles/globals.css'
import Navbar from './shared/Navbar'
import { Hero } from './Hero'
import { About } from './About'
import Faqs from './Faqs'
import LogoSection from './LogoSection'
import { Footer } from './Footer'
import JoinConference from './JoinConference'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <JoinConference/>
      <Faqs />
      <LogoSection />
      <Footer/>
    </>
  )
}
