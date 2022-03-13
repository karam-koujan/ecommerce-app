import type { NextPage } from 'next';
import Hero from '../components/landing/hero';
import About from '../components/landing/about';
import Arrival from '../components/landing/arrival';
import Products from '../components/landing/products';
import Subscribe from '../components/landing/subscribe';
const Home: NextPage = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Arrival/>
    <Products/>
    <Subscribe/>
    </>
  )
}

export default Home
