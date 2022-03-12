import type { NextPage } from 'next';
import Hero from '../components/landing/hero';
import About from '../components/landing/about';
const Home: NextPage = () => {
  return (
    <>
    <Hero/>
    <About/>
    </>
  )
}

export default Home
