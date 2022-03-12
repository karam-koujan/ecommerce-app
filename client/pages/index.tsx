import type { NextPage } from 'next';
import Hero from '../components/landing/hero';
import About from '../components/landing/about';
import Arrival from '../components/landing/arrival';
const Home: NextPage = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Arrival/>
    </>
  )
}

export default Home
