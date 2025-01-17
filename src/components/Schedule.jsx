import '../styles/globals.css'
import Navbar from './shared/Navbar'
import ConferenceSchedule from './ConferenceSchedule'
import { Footer } from './Footer'

export default function Schedule() {
  return (
    <>
      <Navbar />
      <ConferenceSchedule/>
      <Footer/>
    </>
  )
}
