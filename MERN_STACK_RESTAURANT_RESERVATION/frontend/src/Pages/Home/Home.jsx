import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scroller } from 'react-scroll'
import HeroSection from '../../components/HeroSection'
import About from '../../components/About'
import Qualities from '../../components/Qualities'
import Menu from '../../components/Menu'
import WhoAreWe from '../../components/WhoAreWe'
import Coffee from '../../components/Coffee'
import Team from '../../components/Team'
import Reservation from '../../components/Reservation'
import Footer from '../../components/Footer'

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      // Scroll to the section after a small delay to ensure the page has rendered
      setTimeout(() => {
        scroller.scrollTo(location.state.scrollTo, {
          duration: 500,
          smooth: true,
          offset: -70, // Adjust this value based on your navbar height
        });
      }, 100);
    }
  }, [location]);

  return (
    <>
      <HeroSection/>
      <About/>
      <Qualities/>
      <Menu/>
      <WhoAreWe/>
      <Coffee/>
      <Team/>
      <Reservation/>
      <Footer/>
    </>
  )
}

export default Home
