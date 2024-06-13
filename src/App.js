import React from 'react';
import Header from "./components/header"
import Home from './sections/home';
import Services from './sections/services';
import AboutUs from './sections/about-us';
import WorkMethod from './sections/how-we-work';
import Testimonials from './sections/testimonials';
import Bottom from './sections/bottom';
import ServicesBar from './sections/services-bar';
import Footer from './components/footer';

const App=()=>{
  return(
    <div className='flex flex-col'>
      <Header />
      <Home />
      <Services />
      <AboutUs />
      <WorkMethod />
      <Testimonials />
      <Bottom />
      <ServicesBar />
      <Footer />
    </div>
  )
}
export default App; 