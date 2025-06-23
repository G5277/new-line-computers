import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Testimonials from '../components/home/Testimonials';
import LocationMap from '../components/home/LocationMap';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <FeaturedProducts />
      <Testimonials />
      <LocationMap />
    </div>
  );
};

export default Home;