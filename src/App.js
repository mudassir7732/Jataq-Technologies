import React from 'react';
import Header from "./components/header"
import Home from './sections/home';
import Services from './components/services';

const App=()=>{
  return(
    <div className='flex flex-col'>
      <Header />
      <Home />
      <Services />
    </div>
  )
}
export default App; 