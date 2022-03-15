import type { NextPage } from 'next';
import Hero from '../components/landing/hero';
import About from '../components/landing/about';
import Arrival from '../components/landing/arrival';
import Products from '../components/landing/products';
import Subscribe from '../components/landing/subscribe';
import Contact from '../components/landing/contact';
import Layout from '../components/common/layout';
import {ProductContext} from '../context/productContext';
const Home: NextPage = () => {
  return (
    <ProductContext>
    <Layout>
    <Hero/>
    <About/>
    <Arrival/>
    <Products/>
    <Subscribe/>
    <Contact/>
    </Layout>
    </ProductContext>
  )
}

export default Home
