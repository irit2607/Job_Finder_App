import React from 'react'
import "./App.css"
import Search from './components/Search';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <div>
      <NavBar/> 
      <Search/>
      <Footer/>
    </div>
  )
}

export default App;
