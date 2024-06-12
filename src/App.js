import React from 'react';
import Header from "./components/header"
import Home from './sections/home';

const App=()=>{
  return(
    <div className='flex flex-col'>
      <Header />
      <Home />
    </div>
  )
}
export default App; 