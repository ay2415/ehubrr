import logo from './logo.svg';
import React from 'react';
import './App.css';
import Sellpage from './sell';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './home';
import SellLast from './selllast';

function App() {
  return (
    <><div>

      <Header/>
      <HomePage/>
      <Footer/>
      </div>
    </>
  );
}

export default App;
