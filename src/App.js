import React from 'react';
import Header from "./components/header"
import Home from './sections/home';
import Services from './components/services';
import AboutUs from './components/about-us';

const App=()=>{
  return(
    <div className='flex flex-col'>
      <Header />
      <Home />
      <Services />
      <AboutUs />
    </div>
  )
}
export default App; 